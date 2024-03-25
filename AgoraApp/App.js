import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
//SafeAreaView helps us maneuver around the top of screen notch

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
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


