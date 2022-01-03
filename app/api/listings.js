import apiClient from "./client";
//create an endpoint constant, to be easily updated in the future
const endpoint = '/listings'
//create a separate api get call
const getListings = () => apiClient.get(endpoint);
//create a default object for all of your api methods
export default {
    getListings
}
