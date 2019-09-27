import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,Image,ImageBackground} from 'react-native';

export default class Logo extends Component<{}> {
	render() {
		return(
			<View style={styles.container}>
				 <Image
          			style={{resizeMode: 'center'}}
          			source={require('../images/Logo.png')}/>  
        			<Text style={styles.logoText}>
          			{this.props.type}
          			</Text>
        	</View>

			)
	}
}
const styles = StyleSheet.create({
  container: {
   flexGrow: 1,
   backgroundColor: '#3d5afe',
   alignItems :'center',
  
   
  },

  logoText : {
      textAlign: 'center',
      fontSize: 30,
      color : 'rgba(255, 255, 255, 0.7)'
    },

	



});