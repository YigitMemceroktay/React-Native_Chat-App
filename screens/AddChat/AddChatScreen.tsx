import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Input,Button} from 'react-native-elements';
import firebase from '../../firebase/config'
interface IAProps{
    navigation:Function
}
const AddChatScreen = ({navigation}:IAProps) => {
    const [chat,setChat] = useState('')
    function createChatScreen(){
        console.log("HEYYYY");
        firebase.firestore().collection('chat')
        .add({chatName:chat})
        .then(()=>{navigation.goBack()})
        .catch((error)=>console.log(alert));
    }
    return (
        <View style={{flex:1,alignItems:'center'}}>
           <Button onPress={()=>{navigation.goBack()}}/>
           <Text>Add a chat</Text>
           <Input value={chat} onChangeText={(e)=>{setChat(e)}} placeholder="Chat Room Name" />
           <Button type="outline" title="Add a new chat" onPress={()=>{createChatScreen()}}/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({})
