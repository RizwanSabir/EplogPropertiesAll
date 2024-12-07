// useFetch.js
import { useState, useEffect } from 'react';

 const useFetchPost = (url, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const postData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
                
                const result = await response.json();

                if (response.ok) {
                    setData(result);
                } else {
                    setError("Error: " + result.message || "Failed to post data");
                }
            } catch (err) {
                setError("Error posting data: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        postData();
    }, [url, body]);

    return { data, loading, error };
};

export default useFetchPost