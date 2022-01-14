import AsyncStorage from '@react-native-async-storage/async-storage'

import dayjs from 'dayjs';
import logger from './logger';

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
    logger.log(error);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
   //look at the difference between now and the stored time
    //use minutes as the unit
    //set up a point from when we considered data to be expired
    //i.e. 5 minutes
  return now.diff(storedTime, "minute") > expiryInMinutes;
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
    logger.log(error);
  }
};

export default {
  store,
  get,
};


