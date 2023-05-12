import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setError(false)
        setLoading(true);
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLoading(false);
            setError(false);
            setData(data);
        })
        .catch((err) => {
            setLoading(false);
            setError("Error");
        });
    }, [url])

    return {data, loading, error}
}
 
export default useFetch;