import React,{useLayoutEffect, useState,useRef,useEffect} from 'react'
import { TextInput,Image, KeyboardAvoidingView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Button,ListItem,Avatar} from 'react-native-elements'
import firebase from '../../firebase/config'
import firebase1 from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
interface IAProps{
    navigation:Function,
    route:RouteProp
}
const ChatScreen = ({navigation,route}:IAProps) => {
   const scrollView1 = useRef(null);
    function slowlyScrollDown(){
        scrollView1.current.scrollToEnd();
    }
    function setData(){
    firebase.firestore()
    .collection('chat')
    .doc(route.params.id)
    .collection('message')
    .orderBy("timeStamp","asc")
    .get()
    
    .then(
        (querySnapShot)=>{
            
            setMessages(
             querySnapShot.docs.map(
                 (doc)=>{
                     console.log(doc.data().message);
                    return {
                  message:doc.data().message,
                   timeStamp: doc.data().timeStamp,
                   userName: doc.data().userName
                 }}
             )  
           ) 
        }
    )
    
    
   }
   useLayoutEffect(()=>{
    slowlyScrollDown();
   },[])


    const [input,setInputs] = useState('');
   const [messages,setMessages] = useState([]);
   useLayoutEffect(()=>{
    setData();
   },[])


    function sendMessage(){ 
        firebase.firestore()
        .collection('chat')
        .doc(route.params.id)
        .collection('message')
        .add(
         { timeStamp:firebase1.firestore.FieldValue.serverTimestamp(),
          message:input,
          userName:firebase.auth().currentUser?.displayName,
          userEmail:firebase.auth().currentUser?.email
         }
          )
    
    }
 
    return (
        <KeyboardAvoidingView style={{flex:1,width:'100%',}}>
          <View style={{backgroundColor:'blue',width:'100%',height:50,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>{route.params.chatName}</Text>
              </View>
              <ScrollView 
             
              ref={scrollView1}
                onContentSizeChange={slowlyScrollDown}
                
              style={{flex:1,marginBottom:75,paddingHorizontal:20}}>
                  {
                      messages.map(({message,userName})=>{
                        
                        if(userName===firebase.auth().currentUser?.displayName){
                            return (<View style={{flexDirection:'row-reverse',flex:1,height:70,alignItems:'center',justifyContent:'flex-start'}}>
                            <Image source={require('../../anon.png')} style={{width:40,height:40}}/>
                             <View style={{paddingRight:20,alignItems:'flex-end'}}>
                                 <Text style={{color:'blue',fontWeight:'bold'}}>Me</Text>
                                 <Text>{message}</Text>
                              </View>
                            
                            </View>
                            )
                        }


                        return (<View style={{flexDirection:'row',flex:1,paddingVertical:15,alignItems:'center'}}>
                           <Image source={require('../../anon.png')} style={{width:40,height:40}}/>
                            <View style={{paddingLeft:20}}>
                                <Text style={{color:'pink',fontWeight:'bold'}}>{userName}</Text>
                                <Text>{message}</Text>
                             </View>
                           
                           </View>
                        )
                      })
                 
                 }
                  
                  
                  </ScrollView>  
              
        <View style={{width:'100%',height:40,left:0,flexDirection:'row',position:'absolute',bottom:10,marginLeft:10,paddingTop:10}}>
        <TextInput onFocus={slowlyScrollDown    }  value={input} style={{flex:1,borderBottomWidth:0.5}} placeholder="Enter a message" onChangeText={(e)=>{setInputs(e);}} onSubmitEditing={()=>{sendMessage(); setData(); setInputs('');}}/>
        <TouchableOpacity onPress={()=>{sendMessage(); setData(); setInputs('')}} style={{marginRight:20}}>
        <Image source={require('../../send.png')} style={{width:32,height:32}}/>
        </TouchableOpacity >
        </View>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
