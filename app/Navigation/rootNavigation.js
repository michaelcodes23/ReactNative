import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
    //if the navigation method is not null, tested by passing (.current?) - the question mark
    //tests if it is null, (if its not null) pass in the parameters
    //otherwise  do nothing
    navigationRef.current?.navigate(name, params)
}

export default {
    navigate
}