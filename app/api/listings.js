import apiClient from "./client";
//create an endpoint constant, to be easily updated in the future
const endpoint = '/listings'
//create a separate api get call
const getListings = () => apiClient.get(endpoint);

//post a listing
//you can add a content type  for a HTTP request
// when we send json objects the content type is aplication / json
//for images or other types of media we send a multipart / form - data
const addListing = (listing, onUploadProgress) => {
    //create a new FormData template to append the information 
    //we've gathered from listing post
    const data = new FormData();
    
    //apend new key value pairs
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
    data.append('description', listing.description)
    //append all images to data point
    listing.images.forEach((image, index) => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
    }));
    if(listing.location){
        data.append('location', JSON.stringify(listing.location))
    }
    //if we have two components, one parent and child, the child can raise an event
    //to let the parent know something happened
    return apiClient.post(endpoint, data, {
        //if progress is equal to one then we loaded all of the data
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    })
}
//create a default object for all of your api methods
export default {
    addListing,
    getListings
}
