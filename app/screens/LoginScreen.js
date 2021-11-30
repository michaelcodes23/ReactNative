import React from 'react';
import { useState } from 'react';
import {StyleSheet, Image} from 'react-native' 

import * as Yup from 'yup';
import Screen from '../components/Screen';
import {  AppForm, AppFormField, SubmitButton } from '../components/forms';
//useYup to validate
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function LoginScreen(props) {

    return (
        <Screen style = {styles.container}>
            <Image style = {styles.logo} source={require('../assets/logo-red.png')}/>
            {/* <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values=> console.log(values)}
            validationSchema={validationSchema}
            > */}
             <AppForm
            initialValues={{email: '', password: ''}}
            onSubmit={values=> console.log(values)}
            validationSchema={validationSchema}
            >
                {/* { ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => ( */}
                {/* By refactoring our code we don't need to call the parameters above */}
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