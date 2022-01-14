import {create} from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';
import settings from '../config/settings';
const apiClient = create ({
    baseURL: settings.apiUrl,
})
//create call for auth token
apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()

    if(!authToken) return;
        //sends request to backend to make the authToken equal to the verified JWT key
        request.headers['x-auth-token'] = authToken;
 
});
//Place caching logic here
const get = apiClient.get;
apiClient.get = async (url,params, axiosConfig) => {
    //Before
    const response = await get(url, params, axiosConfig)

    if(response.ok){
        cache.store(url, response.data);
        return response;
    }
    //After - if we get to this point we have a proble with the connection
    const data = await cache.get(url)
    console.log('See Cache Data below: ', data)
    //if you have data stored return it
    //otherwise return the response as to why the api call failed
    return data ? {ok: true, data}: response;
}
export default apiClient;
