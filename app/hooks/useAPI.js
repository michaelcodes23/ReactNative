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
        setError(!response.ok)
        setData(response.data);
        return response
        //we combined the setError response below into 3 lines above
        // if(!response.ok)  {
        //     // setError(true)
        //     return response
        // }
        // // setError(false)
        // // setData(response.data);
        // return response;
    }
    return {
        data, error, loading, request
    }
}

export default useAPI