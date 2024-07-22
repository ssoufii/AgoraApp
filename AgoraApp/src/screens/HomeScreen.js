import React from 'react';
import {SafeAreaView, View, Image, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

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
    <SafeAreaView style = {styles.container}>

      <View style={styles.contentContainer}>
        <View style = {styles.firstContainer}>
          <Button
              title="Menu"
              onPress={() => navigation.navigate('Landing')}  // Use the navigation.navigate method
              color="purple"
          />
          <TextComponent text="Listings" style={styles.headerText} />

          <View style={styles.imageContainer}>
              <Image source={require('./images/Agoralogo.png')} style={styles.image} />
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
          <View style = {styles.listingPhotosContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualListing')}>
              <Image source={require('./images/PehonanBoardRoom.png')} style={styles.listingPhoto} />
            </TouchableOpacity>         
            <TextComponent text = "Pehonan Board Room"  style = {styles.descriptionWords}></TextComponent>
            <TextComponent text = "$350.00"  style = {styles.costWords}></TextComponent>
          </View>
          <View style = {styles.listingPhotosContainer}>

            <TouchableOpacity onPress={() => navigation.navigate('IndividualListing')}>
              <Image source={require('./images/PodcastVault.png')} style={styles.listingPhoto} />
            </TouchableOpacity>

            <TextComponent text = "Podcast Vault"  style = {styles.descriptionWords}></TextComponent>
            <TextComponent text = "$450.00"  style = {styles.costWords}></TextComponent>
          </View>
          <View style = {styles.listingPhotosContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualListing')}>
              <Image source={require('./images/HotDesk.png')} style={styles.listingPhoto} />
            </TouchableOpacity>          
            <TextComponent text = "Hot Desk"  style = {styles.descriptionWords}></TextComponent>
            <TextComponent text = "$35.00"  style = {styles.costWords}></TextComponent>      
        </View>

        </View>

        <View style={styles.fifthContainer}>
          <TextComponent text = "Popular"  style = {styles.above_pic_text}></TextComponent>
        </View>

        <View style={styles.sixthContainer}>
        <View style = {styles.listingPhotosContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualListing')}>
              <Image source={require('./images/PehonanBoardRoom.png')} style={styles.listingPhoto} />
            </TouchableOpacity>         
            <TextComponent text = "Pehonan Board Room"  style = {styles.descriptionWords}></TextComponent>
            <TextComponent text = "$350.00"  style = {styles.costWords}></TextComponent>
          </View>
          <View style = {styles.listingPhotosContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualListing')}>
              <Image source={require('./images/PodcastVault.png')} style={styles.listingPhoto} />
            </TouchableOpacity>          
            <TextComponent text = "Podcast Vault"  style = {styles.descriptionWords}></TextComponent>
            <TextComponent text = "$40.00"  style = {styles.costWords}></TextComponent>
          </View>
          <View style = {styles.listingPhotosContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualListing')}>
              <Image source={require('./images/HotDesk.png')} style={styles.listingPhoto} />
            </TouchableOpacity>           
            <TextComponent text = "Hot Desk"  style = {styles.descriptionWords}></TextComponent>
            <TextComponent text = "$35.00"  style = {styles.costWords}></TextComponent>      
        </View>
        </View> 

      </View>

      <View style={styles.seventhContainer}>
        <View style = {styles.bottomIconContainer}> 
          <Image source={require('./images/building.png')} style={styles.iconPhoto} />
          

        </View>

        <View style = {styles.bottomIconContainer}> 
          <Image source={require('./images/house.png')} style={styles.iconPhoto} />
          

        </View>

        <View style = {styles.ProfileContainer}> 
          <Image source={require('./images/ProfilePicture.png')} style={styles.image} />
        </View>
      </View>
  
  
    </SafeAreaView>
  
);
};



//STYLING ************************************************************************************************************************************************************************************************************

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor:'white',
    
        //alignItems: 'center',
    },
    
    contentContainer: {
      //backgroundColor: 'dodgerblue',
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',

    },

    firstContainer: { // top of screen header 
        //transform: [{translateY: 80}],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: -70,
    // borderWidth: 1,
    // borderColor: "white",
       paddingHorizontal: 10,
       marginTop: -400, 
       },

    headerText: {
        fontSize: 30,
        fontWeight: '600',
    },

    secondContainer: { //stores search input box
        //transform: [{translateY: 80}],
        width: '100%',
        //borderWidth: 1,
        //borderColor: "blue",
        alignItems: 'center',
        marginVertical: 80, // control space between this box and above box
        marginBottom: 0,
        
    },


    thirdContainer: { // stores "Near you" text
        
        //transform: [{translateY: 90}],
        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: "black",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginTop: 10,  // moves the whole box up and down with it
        marginHorizontal: 5,
    },

    fourthContainer: { //first row of pictures and prices
        //transform: [{translateY: 90}],

        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        //borderWidth: 1,
        //borderColor: "black",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        //height: 175,
        //marginBottom: 160
      
    },

    fifthContainer: {
        //transform: [{translateY: 190}],

        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: "black",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //marginTop: 10,  // moves the whole box up and down with it
        marginHorizontal: 13,
        paddingVertical: 20,
        position: 'absolute',
        bottom: '35%',
    },

    sixthContainer: {
      //transform: [{translateY: 190}],

      flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        //borderWidth: 1,
        //borderColor: "black",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        //height: 175,
        //marginBottom: -400
        position: 'absolute',
        bottom: '18%',
        
        
    },

    seventhContainer: {
      flexDirection: 'row',
      //transform: [{translateY:340}],
      //transform: [{translateX:-20}],
      position: 'absolute',
      bottom: 0,

      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '11%',
      width: '100%',
      // borderWidth: 1,
      // borderColor: "black",
      backgroundColor: "grey",
      
  },

    inputContainer: {
        height: 40,
        marginVertical: 25,
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 10,
        width: 355 , // This is a wider width to accommodate longer text
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 20,
        
    },

    above_pic_text: { //this is the Near You/ Popular text
      fontSize: 30,
      fontWeight: '450',
    },
    // The next few are all to do with the images
    imageContainer: {
      borderRadius: 100,
      width: 50,
      height: 50,
      overflow: 'hidden', //allows circle to happen
    },

    image: {
      width: '100%',
      height: '100%',
    },

    listingPhotosContainer: {
      flexDirection: 'column',
      width: 125,
      height: 125,
      //overflow: 'hidden',
      paddingHorizontal: 5,
      justifyContent: "space-between",
      //alignItems: "flex-end"
    },

    listingPhoto: {
      width: 120,
      height: 110,
    },

    descriptionWords: {
      fontSize: 12,
      fontWeight:'5', 
    },

    costWords: {
      fontSize: 12,
      fontWeight: '10',
    },

    bottomIconContainer: {
      flexDirection: 'column', 
    },

    iconPhoto: {
      marginHorizontal: '5%',// Add some space between the icons
      height: 75,
      width: 75,
      // borderWidth: 1,
      // borderColor: "black",
    },

    iconWords: {
      marginTop: -15,
      fontSize: 12,
      fontWeight: '400',
      textAlign: 'center',
    },

    ProfileContainer: {
      borderWidth: 1,
      borderColor: "black",
      flexDirection: 'column', 
      borderRadius: 50,
      width: 50,
      height: 50,
      overflow: 'hidden', //allows circle to happen
      
    },


})
export default HomeScreen;