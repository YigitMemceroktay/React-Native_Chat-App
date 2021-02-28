import React from 'react'
import { View, Text } from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
interface IAProps{
    id:string,
    chatName:string
    enterChat:Function
}
const ListItems = ({id,chatName,enterChat}:IAProps) => {
    return (
      
            <ListItem onPress={()=>{enterChat(id,chatName)}} key={id} bottomDivider>
                <Avatar source={require('../profile.png')}/>
                <ListItem.Content>
                <ListItem.Title><Text>{chatName}</Text></ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"><Text>Boun</Text></ListItem.Subtitle>

            </ListItem.Content>


            </ListItem>
      
    )
}

export default ListItems;
