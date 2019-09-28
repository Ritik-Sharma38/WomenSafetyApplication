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
  FlatList,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

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

    help = () => {
        // logic
    }

    render () {
        return (
            <SafeAreaView>
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
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
sosImg: {
    resizeMode: 'center',
},
});