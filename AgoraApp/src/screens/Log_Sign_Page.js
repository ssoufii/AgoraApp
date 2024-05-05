import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles'; // Your styles file

function Log_Sign_Page({ navigation }) {
  const handleLogin = () => {
    // Navigate to LoginScreen when the login button is pressed
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    // Navigate to SignUpScreen when the signup button is pressed
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.login}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGiN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Log_Sign_Page;
