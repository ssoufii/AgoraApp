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
  
const HomeScreen = ({navigation}) => {


    <View>
        <TextComponent text="Login" style={styles.headerText} />

    </View>
}
const styles = StyleSheet.create({
    

    headerText: {
        fontSize: 30,
        fontWeight: '600',
      },


})
export default HomeScreen;