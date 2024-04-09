import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

function SignUpScreen(props) {
    return (
        <div>
            
        </div>
    );
}
const MyComponent = () => {
    return (
      
      <SafeAreaView style={styles.container}>
        <View style={[styles.section, styles.Words]}>
          <TextComponent text="AGORA WORK" style={styles.text2xl} />
          <TextComponent text="WORK FROM ANYWHERE" style={styles.text5xl} /> 
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
    },
});

export default SignUpScreen;
    //brings out terminal message whenever app executes
    //one of the ways to debug
    console.log("SignUp Screen Executed Successfully")
  
    const handlePress = () => console.log("Text pressed"); //notify the console when someone presses text
  
    return (
      //removed View for SafeAreaView to avoid notch
      //<Image source={require('./assets/icon.png')}/>
        <MyComponent />
    )
  };