import React from 'react';
import {View, Image, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

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
        <Button
            title="Menu"
            onPress={() => navigation.navigate('Landing')}  // Use the navigation.navigate method
            color="purple"
        />
        <TextComponent text="Listings" style={styles.headerText} />

        <View style={styles.imageContainer}>
            <Image source={require('./images/Agorawork.png')} style={styles.image} />
         </View>

      </View>
  
      <View style = {styles.secondContainer}>
       
        <TextInput
            style={styles.inputContainer} // inputContainer formally known as lol
            placeholder="Search" 
            value={search} 
            onChangeText={setSearch} 
            autoCapitalize="words"
          />

      </View>
  
      <View style={styles.thirdContainer}>
          <TextComponent text = "Near you"  style = {styles.above_pic_text}></TextComponent>

          <Button
            title="Filter"
            onPress={() => navigation.navigate('Landing')}  // Use the navigation.navigate method
            color="purple"
        />
      </View>

      <View style={styles.fourthContainer}>
        <TextComponent text = "Near you"  style = {styles.above_pic_text}></TextComponent>

      </View>

      <View style={styles.fifthContainer}>
          <CustomButton onPress={() => navigation.navigate('Home')} style={styles.signUpButton}>
            Login!
          </CustomButton>
      </View>

      <View style={styles.sixthContainer}>
          <CustomButton onPress={() => navigation.navigate('Home')} style={styles.signUpButton}>
            Login!
          </CustomButton>
      </View>

      <View style={styles.seventhContainer}>
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
    
    firstContainer: { // top of screen header 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        //borderWidth: 3,
        //borderColor: "red",
        marginBottom: -70,
    // borderWidth: 1,
    // borderColor: "white",
       paddingHorizontal: 10,
       marginTop: -450, 
       },

    headerText: {
        fontSize: 30,
        fontWeight: '600',
    },

    secondContainer: { //stores search input box
        width: '100%',
        //borderWidth: 1,
        //borderColor: "blue",
        alignItems: 'center',
        marginVertical: 80, // control space between this box and above box
        marginBottom: 0,
    },


    thirdContainer: { // stores "Near you" text
        //flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginTop: 10,  // moves the whole box up and down with it

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

    sixthContainer: {
      width: '100%',
      borderWidth: 1,
      borderColor: "black",
      alignItems: 'center',
    },

    seventhContainer: {
      width: '100%',
      borderWidth: 1,
      borderColor: "black",
      alignItems: 'center',
  },

    inputContainer: {
        height: 40,
        marginVertical: 25,
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 10,
        width: 400 , // This is a wider width to accommodate longer text
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 20,
    },

    imageContainer: {
      borderRadius: 100,
      width: 50,
      height: 50,
      overflow: 'hidden',
    },

    image: {
      width: '100%',
      height: '100%',
    },

    above_pic_text: {
      
      fontSize: 30,
      fontWeight: '600',
      
    }
})
export default HomeScreen;