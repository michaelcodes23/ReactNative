import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
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
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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