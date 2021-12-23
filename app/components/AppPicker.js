import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, Modal, Button, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';
import Pickeritem from './PickerItem';
function AppPicker({icon,items,numberofColumns =1, onSelectItem, placeholder, PickerItemComponent = Pickeritem, selectedItem, width = '100%'}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
        <View style = {[styles.container, {width}]}>
        {/* backgroundColor={'white'} name = {'chevron-right'} iconColor={'black'} */}
            {icon && <MaterialCommunityIcons name = {icon} size = {20} color = {colors.medium} style = {styles.icon}/>}
            {selectedItem ? (<AppText style = {styles.text}>{selectedItem.label}</AppText>) 
            : (<AppText style={styles.placeholder}>{placeholder}</AppText>)
            }
            {/* <AppText style = {styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText> */}
            <MaterialCommunityIcons name = 'chevron-down' size = {20} color = {colors.medium} />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible = {modalVisible} animationType = 'slide'>
            <Screen>
                <Button title= 'Close' onPress={() => setModalVisible(false)}/>
                <FlatList 
                    data = {items}
                    keyExtractor = {item => item.value.toString()}
                    numColumns={numberofColumns}
                    renderItem = {({item}) => (
                    <PickerItemComponent
                    item = {item}
                    label = {item.label}
                    onPress = {() => {
                        setModalVisible(false)
                        onSelectItem(item)
                    }}
                    />
                    )}
                />
            </Screen>
        </Modal>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.dark
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    },
    text: {
        flex: 1
    }
})
export default AppPicker;