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

import Geolocation from 'react-native-geolocation-service';

const user = firebase.auth().currentUser;

export default class Actionpage extends Component {

     state = {
      latitude: null,
      longitude: null,
      error:null,
    }
    componentDidMount(){
          Geolocation.getCurrentPosition(  
       (position) => {
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

    message = () => {
        // logic
        SendSMS.send({
		body: 'Urgent! Need help, I am in danger. : ${this.state.latitude}',
		recipients: ['9561365230'],
		successTypes: ['sent', 'queued'],
		allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {

		console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

        });
    }

    phoneCall = () => {
        let phoneNumber = 9819303578;
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