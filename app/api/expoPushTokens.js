import client from './client'
//create your post route for notifications 
const register = (pushToken) => client.post('/expoPushTokens', {token: pushToken });

export default { register }