import React,{useLayoutEffect,useState,useEffect} from 'react'
import { View, Text,StyleSheet,Image,KeyboardAvoidingView,Platform,ActivityIndicator, ImageBackground, StatusBar,TextInput,TouchableOpacity } from 'react-native'
import {Button,Card,Input} from 'react-native-elements'
import firebase from '../../firebase/config'
interface IAProps{
    navigation:Function
}
const LoginScreen = ({navigation}:IAProps) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [loading,setLoading] = useState(false);
    const [loaded,setLoaded] = useState(false);
    function contentLogin(){
        if(loading){
            return <ActivityIndicator color="white" size="small"/>
        }
        return   <Text  style={{fontSize:20,color:'white',letterSpacing:2,fontWeight:'bold'}}>Login</Text>
    } 
    
    function Login(){
        setLoading(true);  
        firebase.auth().signInWithEmailAndPassword(email,pass)
          .then(
            
          )
          .catch(
            ()=>{setLoading(false);}             
          )
 
      }
    
      useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              navigation.replace("Main");
  
          }
          if(!loaded){
          setLoaded(true);}
      })
     })
     
    if(loaded){ return (
          
          <KeyboardAvoidingView >
             
           <ImageBackground style={{width:'100%',height:'100%'}} source={require('../../background.jpg')}>   
              <View style={{width:'100%',flexDirection:'row',paddingTop:50,justifyContent:'space-between'}}>
                  <Image style={{width:40,height:40,marginLeft:15}} source={require('../../enter.png')}/>
                  <Text style={styles.title}>Login</Text></View>
  
              <View style={styles.containerMini}>
              
              <Text style={styles.labels}>Email</Text>
              <View style={styles.textInputContainer}>
              <Image style={styles.inputIcons}source={require('../../envelope.png')}/>
              <TextInput onChangeText={(e)=>{setEmail(e)}} value={email} style={styles.textInputs}/>    
              </View>
      
              <Text style={[styles.labels,{marginTop:30}]}>Password</Text>
              <View style={styles.textInputContainer}>
              <Image style={styles.inputIcons}source={require('../../key.png')}/>
              <TextInput style={styles.textInputs} onChangeText={(e)=>{setPass(e)}} value={pass}/>    
              </View>
  
              <TouchableOpacity onPress={Login} activeOpacity={0.7} style={{backgroundColor:'#D84D4D',borderRadius:15,marginTop:30,alignItems:'center',justifyContent:'center',height:40}}>
                
                  {contentLogin()}
                  </TouchableOpacity>
  
  
              
          
         
  
         </View>
         <View style={{height:60,width:'100%'}}>
                 <TouchableOpacity onPress={()=>{
                     navigation.navigate("Register");
                 }} style={{justifyContent:'center',alignItems:'center'}}>
                     <Text  style={{fontSize:15,color:'black'}}>Don't Have An Account-></Text>
                     </TouchableOpacity>
              </View>
          </ImageBackground>
        
          
          </KeyboardAvoidingView>
      )}
      return(<View></View>)
  }
  
  const styles = StyleSheet.create({
  container:{
      backgroundColor:'#fff',
      width:'100%',
      flex:1,
      alignItems:'center'
  },
  title:{
      fontSize:24,
      marginRight:20,
  
      fontWeight:"bold",
      letterSpacing:3,
      color:'white'
  
  },
  textContainer:{
      width:'100%',
      padding:20,
  
  },
  texts:{
      fontSize:20
  },
  placeholder:{
      paddingHorizontal:20,
  
  },
  buttons:{
  width:'80%',
  marginVertical:20
  },
  textInputs:{
      flex:1,
      paddingLeft:15,
      fontSize:15,
      height:40 ,
      backgroundColor:'white',
      borderRadius:12
  },
  containerMini:{
      width:'100%',flex:1, paddingHorizontal:25,justifyContent:'center'
  },
  textInputContainer:{
      width:'100%', flexDirection:'row', backgroundColor:'white', borderRadius:12,alignItems:'center',paddingLeft:10
  },
  labels:{
      paddingBottom:10,
      fontSize:15,
      color:'#E6E6E6'
  },
  inputIcons:{
      width:20,
      height:20
  }
  
  })
  
  
  
  export default LoginScreen