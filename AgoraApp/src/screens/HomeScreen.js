import React from 'react';
import {View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

const TextComponent = ({ text, style }) => {
    return <Text style={style}>{text}</Text>;
  };
  
  // This is for like the actual bigger real button.
const CustomButton = ({ children, onPress, style, textStyle }) => {
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
};
  
const HomeScreen = ({navigation}) => { //component creation

    const [search, setSearch] = React.useState('');
  
return (
    <View style = {styles.container}>
      <View style = {styles.firstContainer}>
      <TextComponent text="Listings" style={styles.headerText} />
      </View>
  
      <View style = {styles.secondContainer}>
       
        <TextInput
            style={styles.lol}
            placeholder="Search" 
            value={search} 
            onChangeText={setSearch} 
            autoCapitalize="words"
          />

      </View>
  
      <View style={styles.thirdContainer}>
          <CustomButton onPress={() => navigation.navigate('Home')} style={styles.signUpButton}>
            Login!
          </CustomButton>
      </View>

      <View style={styles.fourthContainer}>
          <CustomButton onPress={() => navigation.navigate('Home')} style={styles.signUpButton}>
            Login!
          </CustomButton>
      </View>

      <View style={styles.fifthContainer}>
          <CustomButton onPress={() => navigation.navigate('Home')} style={styles.signUpButton}>
            Login!
          </CustomButton>
      </View>
  
  
    </View>
  
);
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    
    firstContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        //marginBottom: 20,
        borderWidth: 3,
        borderColor: "red",
        marginBottom: 20,
    // borderWidth: 1,
    // borderColor: "white",
        paddingHorizontal: 10,
        marginTop: 180,
    },

    headerText: {
        fontSize: 30,
        fontWeight: '600',
    },

    secondContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: "blue",
        alignItems: 'center',
        marginVertical: 80, // control space between this box and above box
    },


    thirdContainer: {
        borderWidth: 1,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
    },

    fourthContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: "black",
        alignItems: 'center',
    },

    fifthContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: "black",
        alignItems: 'center',
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
})
export default HomeScreen;