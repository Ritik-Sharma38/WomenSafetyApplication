import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar,TouchableOpacity, Button, SafeAreaView } from 'react-native';
import Logo from '../Pages/Logo';
import Tlform from '../Pages/Tlform';
import {Actions} from 'react-native-router-flux';

 
export default class Loginn extends Component<{}> {
  
_call(){
  alert("A password reset link has been to your email ID")
}
_call2(){
  Actions.ssignup()
}
  render() {
    return(
      <SafeAreaView>
        <View style={styles.container}>
          <Logo type="Login"/>
          <Tlform/>
          <TouchableOpacity>
                  <Button 
                    onPress={this._call}
                    title="Forget password"
                    color='rgba(255, 255, 255, 0.1)'
                  />
                    </TouchableOpacity>
          <View style={styles.signUP}>
            <Text style={styles.sign}>Don't have an Account.</Text>
            <TouchableOpacity onPress={this._call2}><Text style={styles.sign}> Signup</Text></TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#3d5afe',
   alignItems :'center',
   justifyContent : 'center',
  },
  signUP: {
    backgroundColor: '#3d5afe',
    alignItems :'flex-end',
    justifyContent : 'center',
    paddingVertical: 16,
    flexDirection:'row',
  },

  sign: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18
  },

  
});