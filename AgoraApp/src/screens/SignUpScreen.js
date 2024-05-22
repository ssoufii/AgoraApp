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
const LoginPageReNavigation = ({ navigation }) => {
  const handleLogin = () => {
    console.log("Login button on Signup Page pressed");
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <CustomButton onPress={handleLogin} style={styles.loginButton}>
      LOGIN
    </CustomButton>
  );
};




const SignupScreen = ({navigation}) => { //component creation

    const [name, setName] = React.useState(''); //name is current state and setName is a function that allows you to update that state
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  return (
    <View style = {styles.container}>
      <View style = {styles.headerContainer}>

          <TextComponent text="Sign Up Page" style={styles.headerText} />

          <Button
            title="LOGIN"
            onPress={() => navigation.navigate('Home')}  // Use the navigation.navigate method
            color="purple"
          />

      </View>

      <View style = {styles.middleContainer}>
        <TextInput
            style={styles.lol}
            placeholder="Name" //This is what give the grey placaeholder "Name" in the box
            value={name} // start value
            onChangeText={setName} //changed to setName aka what the user types in
            autoCapitalize="words"
          />
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
        <Button
              title="Sign Up!"
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue",
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

});

//After every screen, export it at the end so navigation can grab it from App.js
export default SignupScreen; //name from first component made 