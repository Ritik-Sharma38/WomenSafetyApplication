
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
    })


}

call= () => {
 var date = new Date().getDate();
}

    render () {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <TouchableOpacity onPress={this.call}>
                    <Image
                        source={require('../images/sos.png')}
                        style={styles.sosImg}
                    >
                    </Image>
                    <Text>{this.state.categories}</Text>
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
