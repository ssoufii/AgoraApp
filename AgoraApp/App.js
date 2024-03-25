import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//SafeAreaView helps us maneuver around the top of screen notch
export default function App() {
  //brings out terminal message whenever app executes
  //one of the ways to debug
  console.log("App Executed Successfully")

  const handlePress = () => console.log("Text pressed"); //notify the console when someone presses text

  return (
    //removed View for SafeAreaView to avoid notch
    <SafeAreaView style={styles.container}> 
      <Text numberOfLines = {1} onPress={handlePress}>very very long text is needed here so we can test of the numberof lines thing</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex:1 means container'll expand to fit whole screen 
    flex: 1,
    backgroundColor: 'dodgerblue',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
