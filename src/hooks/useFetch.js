import {useState, useEffect} from 'react'

export const useFetch = (url, params) => {

    const initialState = {
        loading: true,
        data: {},
        error: null
      }

    const [result, setResult] = useState(initialState);

    const getFetchResults = async (url, params) => {
        await fetch(url, params)
        .then((res) => res.json())
        .then((data) => {
            setResult((prev) => {
                return{
                    ...prev,
                    loading: false,
                    data: data,
                }
            })
            console.log(data);
        })
        .catch((err) => {
            setResult((prev) => {
                return {
                    ...prev,
                    loading: false,
                    error: err
                }
            })
        })
    }

    useEffect(() => {
        getFetchResults(url, params);
    }, [])

  return result;
}
