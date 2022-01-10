import apiClient from "./client";

//post a message in the server that is sent to backend
//send post request to backend
const send = (message, listingId) => {
    console.log('testing backend call')
    console.log(message, listingId)
    apiClient.post('/messages', {
        message,
        listingId
    })
}

export default {
    send,
};