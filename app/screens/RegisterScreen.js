import React from 'react';
import {StyleSheet} from 'react-native' 
import * as Yup from 'yup';
import Screen from '../components/Screen';
import {  AppForm, AppFormField, SubmitButton } from '../components/forms';
//useYup to validate
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function RegisterScreen(props) {

    return (
        <Screen style = {styles.container}>
            <AppForm
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={values=> console.log(values)}
            validationSchema={validationSchema}
            >
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
            <SubmitButton title = 'Register' />
            </AppForm>
            
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})
export default RegisterScreen;