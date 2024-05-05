//firstly, imports
import React from 'react';
import {View, StyleSheet} from 'react-native';

const SignupScreen = () => { //component creation

  return (
    <View style = {styles.container}></View>
  
  );
};


//Stylingggggg

const styles = StyleSheet.create({
  //encompasses whole screen as container
  container: {
    flex: 1, // fills whole screen with no padding
    backgroundColor: "blue",
  }
});

//After every screen, export it at the end so navigation can grab it from App.js
export default SignupScreen; //name from first component made 