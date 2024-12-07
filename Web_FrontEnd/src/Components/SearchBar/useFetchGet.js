// useFetch.js
import { useState, useEffect } from 'react';

// Hook for GET requests
export const useFetchGet = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                
                if (response.ok) {
                    setData(result);
                } else {
                    setError("Error: " + result.message || "Failed to fetch data");
                }
            } catch (err) {
                setError("Error fetching data: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchGet
