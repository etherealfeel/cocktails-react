import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

const useFetch = (url, count = 'all', type='multiple') => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(url);
            const data = await response.data;
            if(data) {
                if(count!='all') {
                    const lessDrinks = data.drinks.slice(0, count);
                    setData(lessDrinks);
                }
                else {
                    data && setData(data);
                    data.drinks && setData(data.drinks);
                }
                setIsLoading(false);
                setError(false);
            }
        } catch(err) {
            setData([]);
            setIsLoading(false);
            setError(true);
        }
           
    }, [url])

    useEffect(() => {
        fetchData();
    }, [url, fetchData])

    return {data: type=='multiple' ? data : data[0], isLoading, error};
}

export default useFetch;