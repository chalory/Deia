
import { useRef, useEffect, useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const runButtonStyle = {
};
export default function ({ content, setContent }) {
    // const monaco = useMonaco();
    const [wordWrap, setWordWrap] = useState(true);

    //
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    const execute = () => {
        alert(editorRef.current?.getValue());
    };

    const handleChange = (value, event) => {
        setContent(value);
    };

    const toggleWordWrap = () => {
        setWordWrap((value) => {
            return !value;
        });
    };

    return (
        <>
            <button onClick={execute}>Run</button>
            <button onClick={toggleWordWrap}>Toggle word wrap</button>
            <Editor
                width="50vw"
                height="90vh"
                defaultLanguage="html"
                defaultValue={content}
                onMount={handleEditorDidMount}
                onChange={handleChange}
                theme={'vs-dark'}
                options={{
                    "automaticLayout": true,
                    "colorDecorators": true,
                    "formatOnPaste": true,
                    "formatOnType": true,
                    "mouseWheelZoom": true,
                    "wordWrap": (wordWrap) ? "on" : "false",
                }}
            />
        </>
    );
}
