import React from 'react';
import { useState } from 'react';
import {StyleSheet, Image} from 'react-native' 
import authApi from '../api/auth'
import * as Yup from 'yup';


import Screen from '../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton, } from '../components/forms';
import useAuth from '../auth/useAuth';

//useYup to validate
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function LoginScreen(props) {
    //use the object below so that you are able to use object authContext
    //in App.js
    //call the login function in the useAuth asset
    const {logIn} = useAuth()
    const [loginFailed, setLoginFailed] = useState(false)
    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password)
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        //send data to login
        logIn(result.data);
    }
    return (
        <Screen style = {styles.container}>
            <Image style = {styles.logo} source={require('../assets/logo-red.png')}/>

             <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {/* { ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => ( */}
                {/* By refactoring our code we don't need to call the parameters above */}
                <ErrorMessage error = 'Invalid email and/or password.' visible = {loginFailed}/>
                <AppFormField
                autoCapitalize = 'none'
                autoCorrect={false}
                icon = 'email'
                name = 'email'
                keyboardType = 'email-address'
                placeholder = 'Email'
                textContentType='emailAddress'
                />
  
            <AppFormField
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                name= 'password'
                // onBlur={()=> setFieldTouched('password')}
                // onChangeText={handleChange('password')}
                placeholder='Password'
                secureTextEntry={true}
                textContentType='password'
            />
            {/* {touched.email && <ErrorMessage error={errors.password}/>} */}
            <SubmitButton title = 'Login' />
            </AppForm>
            
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20

    }
})
export default LoginScreen;