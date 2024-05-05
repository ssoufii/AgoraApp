//firstly, imports
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const LoginScreen = ({navigation}) => { //component creation

  return (
    <View style = {styles.container}>
    <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}  // Use the navigation.navigate method
        color="white"
      />
    </View>
  
  );
};


//Stylingggggg

const styles = StyleSheet.create({
  //encompasses whole screen as container
  container: {
    flex: 1, // fills whole screen with no padding
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
  }
});

//After every screen, export it at the end so navigation can grab it from App.js
export default LoginScreen; //name from first component made 