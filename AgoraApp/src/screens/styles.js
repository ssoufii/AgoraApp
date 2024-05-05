import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap: -200,
    },
  
    imageContainer: {
      borderRadius: 100, // Half of the width (or height) to make it a circle
      position: 'absolute', //crucial + next 2
      top: 100, //all the way to the top then adjust as needed
      left: 50, //all the way to the left then adjust as needed
      //padding: 10, // Adjust padding as needed
      
      width: 50,
      height: 50,
      overflow: 'hidden',
    },
    image: {
      width: '100%', // Adjust width as needed
      height: '100%', // Adjust height as needed
    },
  
    Words: {
      transform: [{translateY:-100}], 
      width: 300,
      height: 300,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      //borderWidth: 2,
      //borderColor: 'red',
    },
    bottomWords: {
      transform: [{translateY:-120}],
      flex: 0.2,
      justifyContent: "flex-wrap",
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
      transform: [{translateY:-80}], 
      height: 300,
      width: 200,
      alignItems: 'center',
      justifyContent: 'space-evenly', // Align the button to the bottom of the container
      flexDirection: 'column',
      // borderWidth: 2,
      // borderColor: 'green',
    },
  });