import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import SendSMS from 'react-native-sms'

export default class Actionpage extends Component {

    // state = {
    //     categories : [],
    //     prior: []
    // }

    // componentDidMount() {
	// 	let cat = firebase.database().ref('violence_cat');
	// 	cat.on('value', snapshot => {
    //         let data = snapshot.val();
    //         let names = Object.keys(data)
    //         let prior = Object.values(data)
    //         this.setState({categories : names, prior : prior})
    //         console.log(this.state.categories)
    //         console.log(this.state.prior)
	// 	});
    // }

    message = () => {
        // logic
        SendSMS.send({
		body: 'Urgent! Need help, I am in danger.',
		recipients: ['8692990864'],
		successTypes: ['sent', 'queued'],
		allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {

		console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

        });
    }

    phoneCall = () => {
        let phoneNumber = 8692990864;
        Linking.openURL(`tel:${phoneNumber}`)
    }

    help = () => {
        Alert.alert(
            'SOS',
            'Ask for help',
            [
                {text: 'Call', onPress : this.phoneCall, style: 'destructive'},
                {text: 'Message', onPress : this.message, style: 'destructive'},
            ],
            {cancelable: true}
        )
    }

    render () {
        return (
            <SafeAreaView style={{ backgroundColor: '#3d5afe', flex: 1}}>
                <TouchableOpacity style={styles.mainContainer} onPress={this.help}>
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
    justifyContent: 'center',
    alignItems: 'center',
},
sosImg: {
    resizeMode: 'center',
    width: '100%',
    height: '100%',
},
});