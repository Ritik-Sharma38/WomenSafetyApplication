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
} from 'react-native';

export default class Actionpage extends Component {

    state = {
        categories : [],
        prior: []
    }

    componentDidMount() {
		let cat = firebase.database().ref('violence_cat');
		cat.on('value', snapshot => {
            let data = snapshot.val();
            let names = Object.keys(data)
            let prior = Object.values(data)
            this.setState({categories : names, prior : prior})
            console.log(this.state.categories)
            console.log(this.state.prior)
		});
    }

    help = () => {
        // logic
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
            ],
            {cancelable: false},
            );
    }

    render () {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <TouchableOpacity onPress={this.help}>
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