import AsyncStorage from '@react-native-async-storage/async-storage'

import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
   //look at the difference between now and the stored time
    //use minutes as the unit
    //set up a point from when we considered data to be expired
    //i.e. 5 minutes
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

const get = async (key) => {
  try {
       //get item from stored items above
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    //if no items are stored then return nothing
    if(!item) return null;
    //use moment to see if item is expried
    if (isExpired(item)) {
    //if data is expired then remove it using AsyncStorage
     //by referencing the prefix and key and return null
     //We are cautiously breaking the Command 
     //Query Separation (CQS) principle
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
 //if item is not expired, return it
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};


