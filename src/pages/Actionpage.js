import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default class Actionpage extends Component {

    render () {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../images/sos.png')}
                        style={styles.sosImg}
                    >
                    </Image>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
mainContainer: {
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
sosImg: {
    resizeMode: 'center',
},
});