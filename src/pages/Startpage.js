import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Startpage extends Component {
    callHome() {
      Actions.actionPage()
    }
    render() {
        return (
          <SafeAreaView>
            <View style={styles.sectionContainer}>
              <Image
                source={require('../images/logo.png')}
                style={styles.imageLogo}
              />
              <Text style={styles.sectionTitle} >
                #womenSafety
              </Text>
              <Text style={styles.sectionDescription}>
                For a long time, we have been asking our women to "cover themselves up", to "stay in their limits" or "ignore" cases of harassment.
                It's now reached a tipping point and these age-old methods are proving to be ineffective.
              </Text>
            </View>
            <View style={styles.btn}>
              <Button
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
    marginTop: 90,
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



