import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
//SafeAreaView helps us maneuver around the top of screen notch

function Button({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

function Button2({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button2} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}




function Log_Sign_Page() { //displaying every button click
  const handleLogin = () => {
    console.log("Login button pressed");
  };
  return (
    <View style={[styles.login]}>
      <Button onPress={handleLogin}>LOGIN</Button>
      <Button2 onPress={handleLogin}>SIGN UP</Button2>
    </View>
  );
};


const TextComponent = ({ text, style }) => { //this "function prosses text to give them specific styles and text"
  return <Text style={style}>{text}</Text>;
};

const MyComponent = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <TextComponent text="AGORA WORK" style={styles.text2xl} />
        <TextComponent text="WORK FROM ANYWHERE" style={styles.text5xl} /> 
      </View>
      {/* Wrap Log_Sign_Page inside another View */}
      <View style={styles.login}>
        <Log_Sign_Page />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'red',

  },
  section: {
    marginTop: 11,
    maxWidth: '100%', // Ensure the section takes the full width
  },
  text2xl: {
    fontSize: 20, // Adjust as needed
    fontWeight: '600', // Adjust as needed
  },
  text5xl: {
    fontSize: 50, // Adjust as needed
    fontWeight: '300', // Adjust as needed
  },
  text3: {
    fontSize: 100,
  },
   
  button: {
    fontFamily: 'Arial', // Font family is applied in Text component in React Native
    borderRadius: 10,
    backgroundColor: '#cdbf8d',
    width: 150,
    height: 40,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 42,
  },
  button2: {
    fontFamily: 'sans-serif', // Font family is applied in Text component in React Native
    borderRadius: 10,
    backgroundColor: 'black',
    width: 150,
    height: 40,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 42,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },


  login: {
    height: 300,
    width: 200,
    // transform: [{translateY:-250}],
    // //marginBottom: 20, // Add marginBottom to create space between the button and other content
    // marginBottom: 0,
    // marginTop:0,
    borderWidth: 2,
    borderColor: 'green',
    

    alignItems: 'center',
    justifyContent: 'center', // Align the button to the bottom of the container
  },
});



export default function App() {
  //brings out terminal message whenever app executes
  //one of the ways to debug
  console.log("App Executed Successfully")

  const handlePress = () => console.log("Text pressed"); //notify the console when someone presses text

  return (
    //removed View for SafeAreaView to avoid notch
    //<Image source={require('./assets/icon.png')}/>
    
      <MyComponent />
    

    
  );
}


