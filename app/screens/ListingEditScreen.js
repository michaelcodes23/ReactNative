import React, {useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";

import listingsAPI from '../api/listings';
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  //min makes sure there is at least one value in array before called
  //if there is not at least one image then we'll display an error
  images: Yup.array().min(1,'Please select at least one image'),
});

const categories = [
  { label: "Furniture", value: 1, icon: 'floor-lamp', backgroundColor: '#fc5c65'},
  { label: "Clothing", value: 2, icon: 'car', backgroundColor: '#fd9644' },
  { label: "Camera", value: 3, icon: 'camera', backgroundColor: '#fed330'},
  { label: "Games", value: 4, icon: 'cards', backgroundColor: '#26de81'},
  { label: "Clothing", value: 5, icon: 'shoe-heel', backgroundColor: '#2bcbba'},
  { label: "Sports", value: 6, icon: 'soccer', backgroundColor: '#45aaf2'},
  { label: "Movies & Music", value: 7, icon: 'headphones', backgroundColor: '#4b7bec'},
];

function ListingEditScreen() {
  const location =  useLocation();
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress]= useState(0)
  console.log(location)
  const handleSubmit = async (listing, {resetForm}) => {
    setProgress(0);
    setUploadVisible(true)
    // listing.location = location;
    const result = await listingsAPI.addListing({...listing, location},
      //callback function for Api layer to call as upload is progressing
      (progress) => setProgress(progress)
    );
  
    if(!result.ok) {
      setUploadVisible(false)
      return alert('Could not save the listing.')
    };
    //empty form once submitted
    resetForm();
  }
  return (
    <Screen style={styles.container}>
      <UploadScreen onDone= {()=>setUploadVisible(false)} progress={progress} visible = {uploadVisible}/>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        //use function reference for submit button to post
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images'/>
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker 
        items={categories} 
        name="category" 
        numberofColumns={3}
        placeholder="Category" 
        width= "50%"
        PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;