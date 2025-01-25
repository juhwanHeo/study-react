import { useEffect, useState } from "react";

export const useBoardFetch = (title: string = "") => {
    const [data, setData]=  useState(null);
    const [loading, setLoading]=  useState<boolean>(false);
    const [error, setError] =  useState<string | null>(null);

    useEffect(() => {
        console.log(`>>> title: ${title}`);
        
        const apiBoardItems = () => {
            setLoading(true);
            return fetch(`http://heojh.iptime.org:8003/board?title=${title}`)
                .then((response) => {
                    setLoading(false);
                    return response.json();
                })
                .then((json) => setData(json))
                .catch((e) => setError(e));
        }

        apiBoardItems();
    }, [title]);

    return {
        data, 
        loading, 
        error,
    }
}