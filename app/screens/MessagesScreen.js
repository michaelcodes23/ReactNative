import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Constants from 'expo-constants'
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import Icon from '../components/Icon'
const initialMessages = [
    {
        id: 1,
        title: 'Michael 1',
        description: 'Hi, I like the item listed. Is it still available?',
        image: require('../assets/michael.jpg')
    },
    {
        id: 2,
        title: 'Michael 2',
        description: 'Hello, please let me know if the item is still available',
        image: require('../assets/michael.jpg')
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        //Delete the message from messages 
        
        setMessages(messages.filter((m)=> m.id !== message.id))

    }
    return (
            <Screen >
                <FlatList 
                data = {messages}
                keyExtractor = {message => message.id.toString()}
                renderItem = {({item})=> (
                <ListItem
                title = {item.title}
                subTitle = {item.description}
                image={item.image}
                onPress={()=>console.log('Message selected', item)}
                // IconComponent = {<Icon name = {'logout'} backgroundColor= {'#ffe66d'}/>}
                renderRightActions={() => 
                <ListItemDeleteAction
                    onPress ={() => handleDelete(item)}
                />}
                />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/michael.jpg')
                    }
                ])}
            />
            </Screen>
  
            
      
    );
}
const styles = StyleSheet.create({
    screen: {
        // ensures that all image is seen when screen resizes by keep a constant status bar
        paddingTop: Constants.statusBarHeight
    }
})
export default MessagesScreen;