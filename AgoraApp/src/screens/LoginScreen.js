//firstly, imports
import React from 'react';
import {View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

// Define the TextComponent component
const TextComponent = ({ text, style }) => {
  return <Text style={style}>{text}</Text>;
};

// Define the CustomButton component
const CustomButton = ({ children, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

// Define the LoginPageReNavigation component
const SignupPageReNavigation = ({ navigation }) => {
  const handleSignup = () => {
    console.log("Signup button on Login Page pressed");
    navigation.navigate('Signup'); // Navigate to the Login screen
  };

  return (
    <CustomButton onPress={handleSignup} style={styles.SignupButton}>
      Sign Up
    </CustomButton>
  );
};


const LoginScreen = ({navigation}) => { //component creation

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

return (
  <View style = {styles.container}>
    <View style = {styles.headerContainer}>
        <Button
          title="X            "
          onPress={() => navigation.navigate('Home')}  // Use the navigation.navigate method
          color="black"
        />
        <TextComponent text="Login" style={styles.headerText} />

        <Button
          title="SIGNUP   "
          onPress={() => navigation.navigate('Signup')}  // Use the navigation.navigate method
          color="purple"
        />

    </View>

    <View style = {styles.middleContainer}>
     
      <TextInput
          style={styles.lol}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

      <TextInput
          style={styles.lol}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} //secureTextEntry = {true}
          autoCapitalize="none"
      />
    </View>

    <View style = {styles.bottomContainer}>
      <Button styles = {styles.bottomButton}
            title="Log In!"
            onPress={() => navigation.navigate('Home')}  // Use the navigation.navigate method
            color="black"
        />
    </View>


  </View>

);
};

//Stylingggggg
const styles = StyleSheet.create({
  //encompasses whole screen as container
  container: {
    flex: 1, // fills whole screen with no padding
    backgroundColor: "lightblue",

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: "white",
    paddingHorizontal: 10,
    marginTop: 180,  // moves the whole box up and down with it
    

  },

  middleContainer: {
    width: '100%',
    // borderWidth: 1,
    // borderColor: "white",
    alignItems: 'center',
    marginVertical: 80, // control space between this box and above box

  },

  bottomContainer: {
    // borderWidth: 1,
    // borderColor: "white",
    marginBottom: 50,  // control space between this box and below box
    marginVertical: 10,  // control space between this box and above box
    // these last two styles erase need for justify-content and align-items
    marginTop: -15,
  },
  // Style for the header text
  headerText: {
    fontSize: 30,
    fontWeight: '600',
  },

  lol: {
  height: 40,
  marginVertical: 25,
  marginHorizontal: 20,
  borderWidth: 1,
  padding: 10,
  width: 300, // This is a wider width to accommodate longer text
  backgroundColor: 'white',
  borderColor: 'gray'
  },

  SignupButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },

});

//After every screen, export it at the end so navigation can grab it from App.js
export default LoginScreen; //name from first component made 