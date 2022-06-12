import {useEffect, useState} from "react";
import axios from "axios";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({show: false, msg: ''})
    const [data, setData] = useState(null)

    const fetchMovies = async (url) => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(url);
            if (data.Response === 'True') {
                setData(data.Search || data)
                setError({show: false, msg: ''})
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams])


    return {isLoading, error, data}

}

export default useFetch;