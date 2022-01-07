import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
function AppFormField({name, width, ...otherProps}) {
    const {setFieldTouched, errors, setFieldValue, touched, values} =  useFormikContext()
    return (
        <>
            <AppTextInput 

                // autoCapitalize='none'
                // autoCorrect={false}
                // icon='lock'
                //keyboardType='email-address'
                onBlur={()=> setFieldTouched(name)}
                onChangeText={(text)=> setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
                // placeholder='Password'
                // textContentType='password'
            />
            <ErrorMessage error={errors[name]} visible = {touched[name]}/>
        </>
    );
}

export default AppFormField;