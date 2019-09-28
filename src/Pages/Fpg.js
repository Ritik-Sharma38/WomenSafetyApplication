import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,Image,Button,TouchableOpacity} from 'react-native';
import Logo from '../Pages/Logo'
import {Actions} from 'react-native-router-flux';

export default class Flog extends Component {

_onPressButton() {
    Actions.tlogin()
  }
  _callToStudent(){
    Actions.ssignup()
  }
    render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#3d5afe" barStyle="light-content" />
          <Logo type="Let's take a step towards saftey."/>  
       
        <View style={styles.buttonContainer}>
         <TouchableOpacity style={{width: 150, backgroundColor: '#3d5afe', textAlign: 'center'}} onPress={this._onPressButton}>
              <Text style={styles.logoText}>Login</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 7, width: 150,  backgroundColor: '#3d5afe', textAlign: 'center'}} onPress={this._callToStudent}>
              <Text style={styles.logoText}>signup</Text>
            </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}


  const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems :'center',
    justifyContent : 'center',
  },
  
   buttonContainer: {
   flexDirection: 'row',
   padding: 20,
  },
    logoText : {
      marginVertical: 7,
      fontSize: 18,
      color: '#ffffff',
      textAlign: 'center',
    },
 
});