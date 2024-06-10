import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const IndividualListing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.backButton} onPress={() => navigation.goBack()}>Back</Text>
        <Image source={require('./images/PodcastVault.png')} style={styles.image} />
     
      <Text style={styles.title}>Podcast Vault</Text>

      <Text style={styles.address}>10526 Jasper Ave</Text>

      <View style={styles.prices}>
        <Text style={styles.priceText}>$450/day</Text>
        <Text style={styles.priceText}>$2200/week</Text>
        <Text style={styles.priceText}>$10,000/month</Text>
      </View>

      <Text style={styles.description}>
        Discover the Podcast Vault hidden in our historic basement. Equip yourself with top-notch recording gear to kickstart your podcasting journey. Our skilled technician is available for booking at $60/hr. Note that our space is not wheelchair accessible at this time, but we're actively working towards greater inclusivity. Start your podcast today.
      </Text>
      <View style={styles.dateInputContainer}>
        <View style={styles.dateInput}>
          <Text>From</Text>
          <TextInput placeholder="mm/dd/yyyy" style={styles.textInput} />
        </View>

        <View style={styles.dateInput}>
          <Text>To</Text>
          <TextInput placeholder="mm/dd/yyyy" style={styles.textInput} />
        </View>

      </View>
      <TouchableOpacity style={styles.bookButton} onPress={() => { /* Handle booking action */ }}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItem: 'center',
  },
  backButton: {
    paddingVertical: 10,
    marginTop: -50,
    color: 'purple',
    marginBottom: 10,
  },
  image: {

    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    paddingVertical: 10,

    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  address: {
    paddingVertical: 2,
    fontSize: 18,
    marginBottom: 10,
  },
  prices: {
    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    paddingVertical: 10,

    fontSize: 16,
    marginBottom: 20,
  },
  dateInputContainer: {
    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  textInput: {

    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  bookButton: {
    paddingVertical: 1,
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IndividualListing;
