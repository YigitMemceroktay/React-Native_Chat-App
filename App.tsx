import React, { Component } from 'react'
import { Text, View,StatusBar,Dimensions } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './screens/Login/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import MainScreen from './screens/MainScreen/MainScreen'
import AddChatScreen from './screens/AddChat/AddChatScreen'
import CHatScreen from './screens/ChatScreen/ChatScreen'
import ChatScreen from './screens/ChatScreen/ChatScreen'
function App(){
  const Stack = createStackNavigator();
  return(
<View style={{width:'100%',height:'100%'}}>
<StatusBar translucent={true} backgroundColor='transparent' />

<NavigationContainer>
      <Stack.Navigator headerMode="none" >
      
        <Stack.Screen  name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>  
        <Stack.Screen name="AddChat" component={AddChatScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>



    </NavigationContainer>

</View>


  )


}

export default App;