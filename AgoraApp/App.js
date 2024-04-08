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
      <Button onPress={handleLogin}>LOGiN</Button>
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
      
      <View style={[styles.section, styles.Words]}>
        <TextComponent text="AGORA WORK" style={styles.text2xl} />
        <TextComponent text="WORK FROM ANYWHERE" style={styles.text5xl} /> 
      </View>
      {/* Wrap Log_Sign_Page inside another View */}
      <View style={styles.login}>
        <Log_Sign_Page />
      </View>

      <View style={[styles.section, styles.bottomWords]}>
        <TextComponent text="WORKING FROM HOME NOT WORKING OUT? BOOK A CO-WORKING SPACE OR PRIVATE OFFICE" style={styles.text2xl} /> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: -200,


    //borderWidth: 1,
    //borderColor: 'red',
    

  },
  Words: {
    transform: [{translateY:-80}], 
    width: 300,
    height: 300,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomWords: {
    flex: 0.2,
    justifyContent: "flex-wrap",
    borderColor: 'red',
    borderWidth: 2,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  section: {
    marginTop: 11,
    maxWidth: '100%', 
  },
  text2xl: {
    fontSize: 20, 
    fontWeight: '600', 
  },
  text5xl: {
    fontSize: 50, 
    fontWeight: '300', 
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
    marginVertical: 1,
  },
  button2: {
    fontFamily: 'sans-serif', // Font family is applied in Text component in React Native
    borderRadius: 10,
    backgroundColor: 'black',
    width: 150,
    height: 40,
    justifyContent: 'center',
    marginVertical: -90,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },


  login: {
    transform: [{translateY:-40}], 
    height: 300,
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly', // Align the button to the bottom of the container
    flexDirection: 'column',
    // borderWidth: 2,
    // borderColor: 'green',
  },
});

export default function App(){
  //brings out terminal message whenever app executes
  //one of the ways to debug
  console.log("App Executed Successfully")

  const handlePress = () => console.log("Text pressed"); //notify the console when someone presses text

  return (
    //removed View for SafeAreaView to avoid notch
    //<Image source={require('./assets/icon.png')}/>
      <MyComponent />
  )
};