import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class App extends Component {
    render() {
        return (
          <View style={styles.sectionContainer}>
            <Image
              source={require('./src/images/logo.png')}
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
    resizeMode: 'contain',
    width: '25%',
    height: '25%',
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
