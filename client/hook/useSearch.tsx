import { useState, useEffect } from "react";
import axiosConfig from '../configAxios';

export const useSearch = (search: string) => {

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        try {
            setLoading(true);
            const fetchData = async () => {
                const res = await axiosConfig.get(`search/?search_query=${search}`)
                setData(res.data.data);
                setLoading(false);
            }
            fetchData();
        } catch (error) {
            setLoading(true);
            setError("error")
        }
    }, [search]);

    return { data, loading, error }
};

