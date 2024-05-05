import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import Log_Sign_Page from './Log_Sign_Page'; // This will be your Log_Sign_Page component
import styles from './styles'; // Assume you've moved styles to a separate file

const MyComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./images/Agorawork.png')} style={styles.image} />
      </View>
      <View style={[styles.section, styles.Words]}>
        <Text style={styles.text2xl}>AGORA WORK</Text>
        <Text style={styles.text5xl}>WORK FROM ANYWHERE</Text>
      </View>
      <View style={styles.login}>
        <Log_Sign_Page />
      </View>
      <View style={[styles.section, styles.bottomWords]}>
        <Text style={styles.text2xl}>WORKING FROM HOME NOT WORKING OUT? BOOK A CO-WORKING SPACE OR PRIVATE OFFICE</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyComponent;
