import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useChapter from '../hooks/useChapter';
import IdeWrapper from './IdeWrapper';

function Chapter() {
    let { id } = useParams();
    console.log(id);

    const [data, errors, verify] = useChapter(id);
    return (
        <div className="w-[100vw] h-[100vh] flex p-2">
            <div className="flex flex-col w-[30%] h-full border-r border-r-slate-700">
                <Link to="/chapter/getlink">Chapter 1 (Get Link)</Link>
                <Link to="/chapter/getalttext">Chapter 2 (Get alt text)</Link>
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
