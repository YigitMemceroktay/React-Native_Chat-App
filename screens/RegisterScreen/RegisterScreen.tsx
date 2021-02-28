import React,{useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity,ActivityIndicator ,View,KeyboardAvoidingView,ImageBackground,TextInput,Platform } from 'react-native'
import {Input,Button} from 'react-native-elements'
import firebase from '../../firebase/config'
interface IAProps{
    navigation:Function
}
const RegisterScreen = ({navigation}:IAProps) => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPass] = useState('');
    const[passC,setPassC] = useState('');
    const [loading,setLoading] = useState(false);
    function SignUp(){
        setLoading(true);
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user)=>{
            console.log(user);
            user.user?.updateProfile({displayName:name});
            
            navigation.goBack();
            
        }
            
        )
        .catch(()=>{setLoading(false)});

    }
   function registerContent(){
        if(loading){
            return  <ActivityIndicator color="white" size="small"/>
        }
       return <Text  style={{fontSize:20,color:'white',letterSpacing:2,fontWeight:'bold'}}>Register</Text>
    
    }

   
   /*
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{margin:20}} onPress={()=>{navigation.goBack()}}>
        <Image source={require('../../back.png')} style={{padding:20, width:50,height:50}}/>
        </TouchableOpacity>
        <View style={{flex:1,alignItems:'center'}}>
                <Image source={require('../../atom.png')} style={{width:150,height:150}}/>
            <Text style={styles.title}>Register</Text>
         <View style={styles.textContainer}>
          <Text style={styles.texts}>Name</Text>  
            </View>
            <Input placeholder="name" onChangeText={(e)=>{setName(e)}}/>
            <View style={styles.textContainer}>
          <Text style={styles.texts}>Email</Text>  
            </View>
            <Input placeholder="Email" onChangeText={(e)=>{setEmail(e)}}/>
            <View style={styles.textContainer}>
          <Text style={styles.texts}>Password</Text>  
            </View>          
              <Input placeholder="Password" onChangeText={(e)=>{setPass(e)}}/>
              <View style={styles.textContainer}>
          <Text style={styles.texts}>Confirm Password</Text>  
            </View>
            <Input placeholder="Confirm Password" onChangeText={(e)=>{setPassC(e)}}/>
            <Button containerStyle={{width:'80%'}} title="Register" onPress={SignUp}/>
            </View>        
        
        
        </View>
    )*/
    return(
<KeyboardAvoidingView >
             
           <ImageBackground style={{width:'100%',height:'100%'}} source={require('../../background.jpg')}>   
              <View style={{width:'100%',flexDirection:'row',paddingTop:50,justifyContent:'space-between'}}>
                  <Image style={{width:40,height:40,marginLeft:15}} source={require('../../edit.png')}/>
                  <Text style={styles.title}>Register</Text></View>
  
              <View style={styles.containerMini}>
              
              <Text style={styles.labels}>Name</Text>
              <View style={styles.textInputContainer}>
              <Image style={styles.inputIcons}source={require('../../user.png')}/>
              <TextInput onChangeText={(e)=>{setName(e)}} value={name} style={styles.textInputs}/>    
              </View>

              <Text style={[styles.labels,{marginTop:15}]}>Email</Text>
              <View style={styles.textInputContainer}>
              <Image style={styles.inputIcons}source={require('../../envelope.png')}/>
              <TextInput value={email} style={styles.textInputs} onChangeText={(e)=>{setEmail(e)}} />    
              </View>

              <Text style={[styles.labels,{marginTop:15}]}>Password</Text>
              <View style={styles.textInputContainer}>
              <Image style={styles.inputIcons}source={require('../../key.png')}/>
              <TextInput value={password} style={styles.textInputs} onChangeText={(e)=>{setPass(e)}} />    
              </View>

              <Text style={[styles.labels,{marginTop:15}]}>Confirm Password</Text>
              <View style={styles.textInputContainer}>
              <Image style={styles.inputIcons}source={require('../../key.png')}/>
              <TextInput value={passC} style={styles.textInputs} onChangeText={(e)=>{setPassC(e)}}/>    
              </View>
  
              <TouchableOpacity onPress={()=>{SignUp()}} activeOpacity={0.7} style={{backgroundColor:'#D84D4D',borderRadius:15,marginTop:30,alignItems:'center',justifyContent:'center',height:40}}>
                   { registerContent()
}
                  </TouchableOpacity>
  
  
              
          
         
  
         </View>
         <View style={{height:60,width:'100%'}}>
                 <TouchableOpacity onPress={()=>{
                     navigation.goBack();
                 }} style={{justifyContent:'center',alignItems:'center'}}>
                     <Text  style={{fontSize:15,color:'black'}}>Already Have An Account ?</Text>
                     </TouchableOpacity>
              </View>
          </ImageBackground>
        
          
          </KeyboardAvoidingView>
    );
}
/*
export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontSize:40,    
        marginTop:25,
        fontWeight:"bold",
        letterSpacing:3,
    }
    ,
textContainer:{
    width:'100%',
    padding:5,
    paddingLeft:20

},
texts:{
    fontSize:20
}
})
*/
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
        height:40,
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
  
    export default RegisterScreen
