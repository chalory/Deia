import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useChapter from '../hooks/useChapter';
import IdeWrapper from './IdeWrapper';

function Chapter({ id }) {
    const [data, errors, verify] = useChapter(id);
    return (
        <div className="w-[100vw] h-[100vh] flex p-2">
            <div className="flex flex-col w-[30%] h-full border-r border-r-slate-700">
                <p>Chapter 1</p>
                <p>Chapter 2</p>
            </div>
            <div className="grow">
                <div>
                    {data?.prompt}
                </div>
                <div>
                    <IdeWrapper errors={errors} updateErrors={verify} initialCode={data?.code} />
                </div>
            </div>
        </div>
    );
}

export default Chapter;
