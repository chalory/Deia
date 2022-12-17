
import { useRef, useState, Fragment } from 'react';
import Editor, { useMonaco } from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


function HTMLIde({ initialContent, getErrors }) {
    const monaco = useMonaco();
    const [wordWrap, setWordWrap] = useState(false);
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        emmetHTML(monaco);
        emmetCSS(monaco);
        editorRef.current = editor;
    };
    const execute = () => {
        if (!monaco) return;
        const model = monaco.editor.getModels()[0];
        const errors = getErrors(model.getValue(), monaco);
        if (errors) {
            monaco.editor.setModelMarkers(model, "owner", errors);
        }
    };

    const toggleWordWrap = () => {
        setWordWrap((value) => {
            return !value;
        });
    };

    return (
        <div className='p-4'>
            <div className="my-2 flex align-bottom gap-2">
                <button onClick={execute} className="bg-green-500 ml-auto p-2 rounded-md inline-flex items-center">
                    <PlayIcon className='w-[24px] mr-1' />Run
                </button>
                <Options toggleWordWrap={toggleWordWrap} />

            </div>
            <Editor
                width="100%"
                height="90vh"
                className='rounded-md'
                defaultLanguage="html"
                defaultValue={initialContent}
                onMount={handleEditorDidMount}
                theme={'vs-dark'}
                options={{
                    "automaticLayout": true,
                    "colorDecorators": true,
                    "formatOnPaste": true,
                    "formatOnType": true,
                    "mouseWheelZoom": true,
                    "wordWrap": (wordWrap) ? "on" : "off",
                }}
            />
        </div>
    );
}

export default HTMLIde;

function Options({ toggleWordWrap }) {
    return <Menu as="div">
        <Menu.Button className="inline-flex items-center rounded-md bg-black p-2 text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true" />
        </Menu.Button>
        <div>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="px-1 py-1 ">
                    <Menu.Item>
                        {({ active }) => (
                            <div className={`inline-flex w-full justify-center ${(active) ? ' bg-violet-500 text-white' : 'text-gray-900'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>

                                <button onClick={toggleWordWrap}>
                                    Toggle Word Wrap
                                </button>
                            </div>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>;
}

