import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

// Button component specific to HomeScreen
const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

// Button2 component specific to HomeScreen
const Button2 = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button2} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

// TextComponent specific to HomeScreen
const TextComponent = ({ text, style }) => {
  return <Text style={style}>{text}</Text>;
};

// LogSignPage component specific to HomeScreen
const LogSignPage = () => {
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  return (
    <View style={styles.login}>
      <Button onPress={handleLogin}>LOGIN</Button>
      <Button2 onPress={handleLogin}>SIGN UP</Button2>
    </View>
  );
};

const HomeScreen = () => {
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
        <LogSignPage />
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
    fontWeight: '600',
  },
  text5xl: {
    fontSize: 50,
    fontWeight: '300',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#cdbf8d',
    width: 150,
    height: 40,
    justifyContent: 'center',
    marginVertical: 1,
  },
  button2: {
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
    transform: [{translateY: -80}],
    height: 300,
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default HomeScreen;
