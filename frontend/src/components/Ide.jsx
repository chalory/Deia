import Editor, { useMonaco } from '@monaco-editor/react';
import { emmetHTML, emmetCSS } from 'emmet-monaco-es';
import React, { useEffect, useRef } from 'react';
/* eslint-disable */
/**
 * @typedef {Parameters<import('@monaco-editor/react').OnMount>} OnMountFuncn
 * @typedef {import('react/index').MutableRefObject<OnMountFuncn[0] | null>} EditorObj
 * @typedef {Object} props
 * @property {string} code
 * @property {*} setCode
 * @property {Array<any>} errors
 * @property {*} options
 * @param {props} props
 * @returns
 */
function Ide({ code, setCode, errors, options }) {
    /**
     * @typedef {Parameters<import('@monaco-editor/react').OnMount>} OnMountFuncn
     * @type import('react/index').MutableRefObject<OnMountFuncn[0] | null>
     */
    const editorRef = useRef(null);
    const monaco = useMonaco();

    /**
     * @type import('@monaco-editor/react').OnMount
     */
    const handleEditorDidMount = (editor, monaco) => {
        emmetHTML(monaco);
        emmetCSS(monaco);
        editorRef.current = editor;
    };

    /**
     * @param {string} severity
     */
    const severityHandler = (severity) => {
        if (!monaco) {
            return 8;
        }
        switch (severity.toLowerCase()) {
            case 'error': {
                return monaco.MarkerSeverity.Error;
            }
            case 'info': {
                return monaco.MarkerSeverity.Info;
            }
            case 'warning': {
                return monaco.MarkerSeverity.Warning;
            }
            case 'hint': {
                return monaco.MarkerSeverity.Hint;
            }
            default:
                return monaco.MarkerSeverity.Error;
        }
    };
    useEffect(() => {
        if (!monaco) return;
        const model = monaco.editor.getModels()[0];
        console.log('rev', errors);
        const currentMarkers = errors.map(error => {
            return {
                severity: severityHandler(error.type),
                message: error.message,
                startColumn: model.getLineMinColumn(error.location.line),
                startLineNumber: error.location.line,
                endColumn: model.getLineMaxColumn(error.location.line) - 1,
                endLineNumber: error.location.line,
            };
        });
        console.log('lus', currentMarkers);
        monaco.editor.setModelMarkers(model, "owner", currentMarkers);
    }, [errors]);

    const formatDocument = () => {
        if (!editorRef.current) return;
        editorRef.current.getAction("editor.action.formatDocument").run();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            formatDocument();
        }, 15000);
        return () => clearTimeout(timer);
    }, [editorRef]);


    const handleBlur = () => {
        formatDocument();
    };

    const handleChange = (value) => {
        if (!monaco) return;
        const model = monaco.editor.getModels()[0];
        setCode(model.getValue());
        editorRef.current?.getValue();
    };
    return (
        <Editor
            width="100%"
            height="100%"
            className='rounded-md'
            defaultLanguage="html"
            onMount={handleEditorDidMount}
            value={code}
            onChange={handleChange}
            theme={'vs-dark'}
            options={{
                "automaticLayout": true,
                "colorDecorators": true,
                "formatOnPaste": true,
                "formatOnType": true,
                "mouseWheelZoom": true,
                ...options,
            }}
            wrapperProps={{ onBlur: handleBlur }}
        />
    );
}

export default Ide;
