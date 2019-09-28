import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { Container, Text } from "native-base";
import Geolocation from 'react-native-geolocation-service';

export default class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
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
 


  render() {
    return (
      <View>
        <Text> {this.state.latitude} </Text>
        <Text> {this.state.longitude} </Text>
        <Text> {this.state.error} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
  }

});
