import Constants from "expo-constants"

const settings = {
    dev: {
        apiUrl: "http://192.168.17.222:9000/api"
    },
    staging: {
        apiUrl: "http://192.168.17.222:9000/api"
    },
    prod: {
        apiUrl: "http://192.168.17.222:9000/api"
    },
}

const getCurrentSettings = () => {
    //check if you are in local dev environment, else return the other urls
    if(__DEV__) return settings.dev;
    if(Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod
}

export default getCurrentSettings();
