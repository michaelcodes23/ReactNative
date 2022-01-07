import React from 'react';
import LottieView from 'lottie-react-native'
const Activityindicator = ({visible = false}) => {
    if(!visible) return null;
    else return (
    <LottieView 
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
    />
    )
}



export default Activityindicator;
