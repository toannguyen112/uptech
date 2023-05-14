import { useState } from 'react'
import axios from '../../configAxios';
import { useRouter } from 'next/router';
import React from 'react'
import EventBus from '../../event-bus';

export function useFetchListAdmin(url: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<any>(false);
    const [error, setError] = useState<any>(null);

    const router = useRouter();
    const { query, isReady }: any = router;
    const params = new URLSearchParams(query).toString();

    React.useEffect(() => {
        if (isReady) fetchData();

        EventBus.$on('refreshListData',
            (data: any) => {
                fetchData();
            });
    }, [query, isReady]);

    const fetchData = async () => {
        const locale = router.locale;
        const headers: any = { 'Accept-Language': locale };

        await axios
            .get(`${url}?` + params, { headers })
            .then((response) => {
                setLoading(false)
                response.data && setData(response.data.data)
            })
            .catch((err) => {
                setLoading(false);
                setError('An error occurred. Awkward..')
            });
    }

    return { data, loading, error }
}

