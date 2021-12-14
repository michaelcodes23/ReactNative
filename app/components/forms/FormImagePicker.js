import React from 'react';
import ImageInputlist from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
const FormImagePicker = ({name}) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name]
    const handleAdd = (uri) => {
        //spread operator allows us to push into the setImageUris
        //by setting the imageUris to the array, and what it currently contains
        //plus the new uri
        //setFieldValue has two parameters, name and value
        //the name is the prop.name and the value is the imageUris
        setFieldValue(name, [...imageUris, uri])
      }
    
      const handleRemove = (uri) => {
        //go through the array and filter out what is in the imageUri except
        //the uri you are trying to remove
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
      }
    return (
        <>
        {/* bring in the value of name, using formik, to place in the image uri */}
        <ImageInputlist 
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
         <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}



export default FormImagePicker;
