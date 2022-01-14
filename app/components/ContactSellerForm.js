import React from 'react';
import {Alert, Keyboard} from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from './forms'
import messagesApi from '../api/messages';

function ContactSellerForm({listing}){
    const handleSubmit = async({message}, {resetForm}) => {
        //the moment we submit a form we dismiss the keyboard
        console.log(message, listing.id)
        console.log(listing)
        Keyboard.dismiss();
        //make the call to the backend to post a message
        
        const result = await messagesApi.send(message, listing.id);
        
        if(!result.ok){
            console.log('Error', result);
            return Alert.alert('Error', 'Could not send the message to the seller.');
        }
        resetForm();

        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Awesome',
                body: "Your message was sent to the seller: '" + message + "'",
            },
            trigger: {
                seconds: 5,
            },
        });
    };
    return (
        <AppForm
            initialValues={{message: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
        <AppFormField
             maxLength={255}
             multiline
             name="message"
             numberOfLines={3}
             placeholder="Message..."
        />
        <SubmitButton title = 'Contact Sellect'/>
        </AppForm>

    )
}

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label('Message'),
});

export default ContactSellerForm;