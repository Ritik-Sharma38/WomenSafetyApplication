import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,TouchableOpacity,SafeAreaView ,ScrollView} from 'react-native';
import Logo from '../Pages/Logo';
import Tform from '../Pages/Tform';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  render() {
    return(
    
        <View style={styles.container}>
        
         <Logo type="Signup"/>
         <Tform/>
        
        </View>
   
      );
  }
}

const styles = StyleSheet.create({
  container: {
   flexGrow: 1,
   backgroundColor: '#3d5afe',
   alignItems :'center',
   justifyContent : 'center',
   
  }




});