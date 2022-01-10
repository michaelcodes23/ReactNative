import React, {useState} from 'react';
import {StyleSheet} from 'react-native' 
import * as Yup from 'yup';
import Screen from '../components/Screen';
import {  AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import users from '../api/users';
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useAPI from '../hooks/useAPI';
import Activityindicator from '../components/ActivityIndicator';

//useYup to validate
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function RegisterScreen(props) {
    const registerApi = useAPI(users.register)
    const loginApi = useAPI(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();
    const handleSubmit = async (userInfo) => {
        //register your new user
        //using the useAPI hook enables us to repare the activity indicator on a slow connection
        const result = await registerApi.request(userInfo)
        if(!result.ok) {
            //if the post was not made successfully
            if(result.data) setError(result.data.error)
            else{
                setError('An unexpected error ocurred')
                console.log(result)
            }
            return;
        }
        //if registrations is successful, log in 
        const {data: authToken} = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken)
    }
    return (
        <>
        <Activityindicator visible = {registerApi.loading || loginApi.loading}/>
        <Screen style = {styles.container}>
            
            <AppForm
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <ErrorMessage error = {error} visible={error}/>
                {/* { ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => ( */}
                {/* By refactoring our code we don't need to call the parameters above */}
                <AppFormField
                autoCorrect={false}
                icon = 'account'
                name = 'name'
                placeholder = 'Name'
                />
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
            <SubmitButton title = 'Register'  />
            </AppForm>
            
            </Screen>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})
export default RegisterScreen;