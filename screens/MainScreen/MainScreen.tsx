import React,{useState,useEffect,useLayoutEffect} from 'react'
import { StyleSheet, Text,Image, View,TouchableOpacity,ScrollView } from 'react-native'
import {Button} from 'react-native-elements'
import {useIsFocused} from '@react-navigation/native'

import firebase from '../../firebase/config'
import ListItems from '../../components/ListItem'
interface IAProps{
    navigation:Function
}
const MainScreen = ({navigation}:IAProps) => {
    const isFocused = useIsFocused();
    const [chats,setChats] = useState([]);
    const [loaded,setLoaded] = useState(false);



    useEffect(()=>{
    
        firebase.firestore()
        .collection('chat')
        .get()
        .then(
            (querySnapShot)=>{
             setChats(
                querySnapShot.docs.map(
                (doc)=>
                    ({
                    id:doc.id,
                    data:doc.data()
                })
                ) 
    
                )

            }
        )
       console.log(chats); 

    },[isFocused]);
    function enterChat(id,chatName){
        navigation.navigate("Chat",{
            id:id,
            chatName:chatName
        })
    }
    function signout(){
        firebase.auth().signOut()
        .then(navigation.replace("Login"))
        .catch();

    }
    
    return (
        <View style={{width:'100%',height:'100%'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>{signout()}}><Image source={require('../../log-out.png')} style={{width:40,height:40,padding:5,marginLeft:15}}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("AddChat")}}><Image source={require('../../edit.png')} style={{width:40,height:40,padding:5}}/></TouchableOpacity>
            </View>
            <ScrollView>
        {
            chats.map(({id,data:{chatName}})=>
            {
                return <ListItems id={id} key={id} enterChat={enterChat} chatName={chatName} /> 
            }
            )
        }
            </ScrollView>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    header:{
        borderWidth:1,
        width:'100%',
        height:75,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})
