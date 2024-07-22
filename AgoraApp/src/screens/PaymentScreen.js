import React, { useState } from 'react';
import { Button, View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const PaymentPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('Canada');

  const handlePayment = () => {
    // Handle payment logic here
    navigation.navigate('Confirmation');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
          <View style={styles.backButtonContainer}>
              <Button 
                title="Back"
                onPress={() => navigation.navigate('IndividualListing')}  // Use the navigation.navigate method
                color="purple"
              />
          </View>   
        <Image source={require('./images/PodcastVault.png')} style={styles.image} />
        <Text style={styles.title}>Podcast Vault</Text>
        <Text style={styles.price}>$450.00</Text>
        
        <TouchableOpacity style={styles.applePayButton}>
          <Text style={styles.applePayButtonText}>Pay</Text>
        </TouchableOpacity>

        <Text style={styles.separator}>Or pay with your card</Text>

        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />

          <Text>Card Information</Text>
          <View style={styles.cardInfoContainer}>
            <TextInput
              style={[styles.textInput, styles.cardNumberInput]}
              placeholder="1234 4321 1234 4321"
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.textInput, styles.expiryInput]}
              placeholder="MM/YY"
              value={expiry}
              onChangeText={setExpiry}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.textInput, styles.cvcInput]}
              placeholder="CVC"
              value={cvc}
              onChangeText={setCvc}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>

          <Text>Country or Region</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your country"
            value={country}
            onChangeText={setCountry}
          />

          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.payButtonText}>Pay $450.00</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  
  outerContainer: {
    flex: 1,
    paddingTop: 60,  // Add padding to shift content down
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    //marginTop: 30,
  },
  backButton: {
    fontSize: 24,
    color: 'black',
    alignSelf: 'flex-end',
    marginBottom: 10,
    //transform: [{translateY: 70}],

  // backButtonContainer: {
  //     alignSelf: 'flex-start',  // Aligns the button container to the start (left) of the parent container
  //     marginBottom: 10,
  },
  image: {
    width: '80%',
    height: 160,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    
  },
  title: {
    paddingVertical:10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    paddingVertical:10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  applePayButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  applePayButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  form: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  cardInfoContainer: {
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardNumberInput: {
    flex: 2,
    marginRight: 10,
  },
  expiryInput: {
    flex: 1,
    marginRight: 10,
  },
  cvcInput: {
    flex: 1,
  },
  payButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  backButtonContainer: {
    alignSelf: 'flex-start',  // Aligns the button container to the start (left) of the parent container
    marginBottom: 10,
  },

});

export default PaymentPage;

