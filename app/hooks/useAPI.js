import { useState } from "react";

const useAPI = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        //story for controlling animation
        setLoading(true)
        const response = await apiFunc(...args);
        setLoading(false)
        //story for controlling an error
        if(!response.ok)  return setError(true)
       
        setError(false)
        setData(response.data);
    }
    return {
        data, error, loading, request
    }
}

export default useAPI