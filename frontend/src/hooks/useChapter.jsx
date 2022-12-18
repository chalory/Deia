import axios from 'axios';
import { useState, useEffect } from 'react';

function useChapter(chapterId) {
    const [data, setData] = useState({ prompt: "Loading", code: "Loading" });
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        (async () => {
            const { data: response } = await axios.get(`http://localhost:5000/chapters/${chapterId}`);
            setData(response);
        })();
    }, [setData, chapterId]);
    const verify = async (code) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/chapters/${chapterId}`, {
                code
            });
            if (response.data.type === 'error') {
                setErrors(response.data.messages);
            } else {
                setErrors([]);
            }
        }
        catch (err) {
            console.error(err);
        }
    };
    return [data, errors, verify];
}

export default useChapter;
