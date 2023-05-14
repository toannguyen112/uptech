import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from '../configAxios'
import EventBus from '../event-bus';

function useFetchDetail(model: string, formData: any) {

  const [form, setForm] = useState<any>(formData)
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<any>(null)
  const router = useRouter()
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    EventBus.$on('refreshData', (data: any) => {
      fetchData();
    });

    fetchData();

    return () => {
      EventBus.$remove('refreshData', fetchData())
    }
  }, [id]);

  const fetchData = async () => {

    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };

    setLoading(true);
    await axios
      .get(`/${model}/show/${id}`, { headers })
      .then((res) => {
        setForm({ ...form, locale, ...res.data.data });
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      })
  }

  return { loading, error, form, setForm, id }
}

export default useFetchDetail
