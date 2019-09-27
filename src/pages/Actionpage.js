import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Actionpage extends Component {

    render () {
        return (
            <TouchableOpacity style={styles.actionBtn}>
              <Icon name={"chevron-right"}  size={10} color="#01a699" />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
actionBtn: {
  borderWidth:1,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'center',
  width:100,
  height:100,
  backgroundColor:'#fff',
  borderRadius:50,
},
});