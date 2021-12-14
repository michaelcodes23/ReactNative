import React, { useRef } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputlist({imageUris = [], onRemoveImage, onAddImage}){
    const scrollView = useRef();
    
    return (
        //add ScrollView with horizontal = {true} method to allow for horizontal
        //scrollView fits the whole size of the page, addView
        //to limit the size of ScrollView component
        <View>
             <ScrollView 
        //fit Scroll View to not fill all available space
        horizontal ref={scrollView} 
        onContentSizeChange={()=> scrollView.current.scrollToEnd()}>
            <View style = {styles.container}>
            {imageUris.map((uri)=> (
                <View key={uri} style = {styles.image}>
                    <ImageInput 
                    imageUri={uri} 
                    key= {uri} 
                    onChangeImage={()=> onRemoveImage(uri)}/>     
                </View>
                
                
            ))}
            <ImageInput onChangeImage={(uri)=> onAddImage(uri)}/>
            </View>
        </ScrollView>
        </View>
       

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10,
    }

})

export default ImageInputlist;
