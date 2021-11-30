import React from 'react';
import {StyleSheet} from 'react-native'
import * as Yup from 'yup'
import {
    AppForm,
    AppFormField, 
    AppFormPicker,
    SubmitMessage
} from '../components/forms'
function ListingEditScreen(props) {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label('Title'),
        price: Yup.number().required().min(1).max(10000).label('Price'),
        description: Yup.string().label('Description'),
        category: Yup.object().required().nullable().label('Category')
    })
    const categories = [
        {label: 'Furniture', value: 1},
        {label: 'Clothing', value: 2},
        {label: 'Camera', value: 3}
    ]
    return (
        <Screen style = {styles.container}>
             <AppForm
            //  category is null because the object will either have a vateogry or not
            initialValues={{title: '', price: '', description: '', category: null}}
            onSubmit={values=> console.log(values)}
            validationSchema={validationSchema}
            >
                {/* { ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => ( */}
                {/* By refactoring our code we don't need to call the parameters above */}
                <AppFormField
                maxLength={255}
                name = 'title'
                placeholder = 'Title'
                />
            <AppFormField
                maxLength={8} // max -> 10000.00
                name= 'price'
                placeholder='Price'
                keyboardType = 'numeric'
            />
            <AppFormPicker
                items={categories}
                name='category'
                placeholder='Category'
            />
            {/* {touched.email && <ErrorMessage error={errors.password}/>} */}
            <SubmitButton title = 'Login' />
            </AppForm>
            
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default ListingEditScreen;