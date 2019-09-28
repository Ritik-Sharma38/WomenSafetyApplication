import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Startpage extends Component {
    callHome() {
      Actions.location()
    }
    logout(){
      firebase.auth().signOut();
      Actions.fpg()
    }
    render() {
        return (
          <View>
          <TouchableOpacity onPress={this.logout} >
          <Image style={{resizeMode: 'contain',  width: '28%',  height: '28%', alignSelf:'flex-end'}}
              source={require('../images/logout.png')}
            />
            </TouchableOpacity>
          <View style={styles.sectionContainer}>
            <Image
              source={require('../images/Logo.png')}
              style={styles.imageLogo}
            />
            <Text style={styles.sectionTitle} >
              #womenSafety
            </Text>
            <Text style={styles.sectionDescription}>
              For a long time, we have been asking our women to "cover themselves up", to "stay in their limits" or "ignore" cases of harassment.
              It's now reached a tipping point and these age-old methods are proving to be ineffective.
            </Text>
            <View style={styles.btn}>
              <Button
                title="Enter"
                onPress={this.callHome}
              >
              </Button>
            </View>
         </View>
         </View>
        );
    }
}

const styles = StyleSheet.create({
 sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
  width: 150,
  height: 111,
  alignSelf: 'center'
  },

btn: {
  padding: 10,
  alignContent: 'center',
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



