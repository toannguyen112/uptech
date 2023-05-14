import { useState, useEffect } from 'react'
import axios from '../configAxios'

function useFetch(url: string) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setLoading('loading...')
    setData(null)
    setError(null)
    axios
      .get(url)
      .then((res) => {
        setLoading(false)
        res.data && setData(res.data.data)
      })
      .catch((err) => {
        setLoading(false)
        setError('An error occurred. Awkward..')
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
