import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screen Imports that will be nagivated through Via App.js
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignUpScreen';

//Acts as a navigation controller for rest of screens

const Stack = createStackNavigator();


//NOT ALLOWED COMMENTS IN THE BELOW! WILL CRASH AT RUNTIME
/* Referenced in other files as just Signup,  SignupScreen is just component name in SignupScreen.js file */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
