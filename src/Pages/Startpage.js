import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// var name, age, address, distance;

// // const user_info = {
// //   name : user.name,
// //   age : user.age,
// //   address : user.address,
// //   distance : user.distance,
// // }

export default class Startpage extends Component {
    callHome() {
      Actions.actionpage()
    }
    logout(){
      firebase.auth().signOut();
      Actions.fpg()
    }

    render() {
        return (
          <SafeAreaView style={{ backgroundColor: 'white', flex: 1}}>
            <TouchableOpacity onPress={this.logout} >
            <Image style={{resizeMode: 'contain', width: 30, height: 30, alignSelf:'flex-end'}}
                source={require('../images/logout.png')}
              />
            </TouchableOpacity>
            <View style={styles.sectionContainer}>
              <Image
                source={require('../images/Logo.png')}
                style={styles.imageLogo}
              />
              <Text style={styles.sectionTitle} onPress={() => Linking.openURL('https://github.com/sr1jan/womenSafetyApp')} >  
                #womenSafety
              </Text>
              <Text style={styles.sectionDescription}>
                For a long time, we have been asking our women to "cover themselves up", to "stay in their limits" or "ignore" cases of harassment.
                It's now reached a tipping point and these age-old methods are proving to be ineffective.
              </Text>
            </View>
            <View style={styles.btn}>
              <Button
                color='black'
                title="Enter"
                onPress={this.callHome}
              >
              </Button>
            </View>
          </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
 sectionContainer: {
    padding: 20,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: '600',
},
sectionDescription: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
},
imageLogo: {
  resizeMode: 'contain',
  width: '25%',
  height: '25%',
},
btn: {
  padding: 15,
  left: 80,
  width: '50%',
  justifyContent: 'center',
},
highlight: {
  fontWeight: '700',
},
footer: {
  fontSize: 12,
  fontWeight: '600',
  padding: 4,
  paddingRight: 12,
  textAlign: 'right',
},
});



