import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyComponent from './screens/MyComponent'; // Your main/home screen
import LoginScreen from './screens/LoginScreen'; // Your login screen
import SignUpScreen from './screens/SignUpScreen'; // Your signup screen

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={MyComponent} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
