import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

// Button component specific to HomeScreen, used for signup and login --> used to be Button and Button2, now simplified
const Button = ({ children, onPress, style, textStyle }) => {
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  };

// TextComponent specific to HomeScreen
const TextComponent = ({ text, style }) => {
  return <Text style={style}>{text}</Text>;
};

// LogSignPage component specific to HomeScreen
const LogSignPage = ({navigation}) => {
    const handleLogin = () => {
      console.log("Login button pressed");
      navigation.navigate('Login') //navigates to signup screen
    };
  
    const handleSignup = () => {
      console.log("Signup button pressed");
      navigation.navigate('Signup') //navigates to signup screen

    };

    //in this return, we use one general button component because signUp and logIn are similiar structure
    //but they now output different things to the console
    return (
        <View style={styles.login}>
          <Button onPress={handleLogin} style={styles.loginButton}>LOGIN</Button>
          <Button onPress={handleSignup} style={styles.signupButton}>SIGN UP</Button> 
        </View>
      );
};

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./images/Agorawork.png')} style={styles.image} />
      </View>
      <View style={[styles.section, styles.Words]}>
        <TextComponent text="AGORA WORK" style={styles.text2xl} />
        <TextComponent text="WORK FROM ANYWHERE" style={styles.text5xl} /> 
      </View>
      <View style={styles.login}>
        <LogSignPage navigation={navigation} />
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
  },
  imageContainer: {
    borderRadius: 100,
    position: 'absolute',
    top: 100,
    left: 50,
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  Words: {
    transform: [{translateY: -100}],
    width: 300,
    height: 300,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomWords: {
    transform: [{translateY: -120}],
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2xl: {
    fontSize: 20,
    fontWeight: '700',
  },
  text5xl: {
    fontSize: 50,
    fontWeight: '500',
  },
  button: {
    borderRadius: 10,
    width: 150,
    height: 40,
    justifyContent: 'center',
    marginVertical: 1,
  },
  loginButton:{
        backgroundColor: '#cdbf8d',
      },
  signupButton: {
        backgroundColor: 'black',
      },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  login: {
    transform: [{translateY: -80}],
    height: 300,
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default HomeScreen;
