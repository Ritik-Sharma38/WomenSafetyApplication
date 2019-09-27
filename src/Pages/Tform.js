import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase'
import {Actions} from 'react-native-router-flux';

export default class Tform extends Component<{}> {
call2(){
	Actions.ssform()
}
state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.call2())
      .catch(error => this.setState({ errorMessage: error.message }))
  
}


	render() {
		return(
			<View style={styles.container}>
			{this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
				
				 <TextInput style={styles.inputBox}
				  placeholder="Email"
				  placeholderTextColor = "#ffffff"
				   onChangeText={email => this.setState({ email })}
          			value={this.state.email}
				  />
				  <TextInput
				  secureTextEntry
				   style={styles.inputBox}
				  placeholder="Password"
				  secureTextEntry={true}
				  placeholderTextColor = "#ffffff"
				  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
				  />
				  <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
				  <Text style={styles.buttonText}>SignUp</Text>
				  </TouchableOpacity>
	
        	</View>

			)
	}
}
const styles = StyleSheet.create({
  container: {
   flexGrow: 1,
   backgroundColor: '#3d5afe',
   alignItems :'center',
   justifyContent : 'center',
   
  },
		
	inputBox: {
		width: 300,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#ffffff',
		marginVertical: 10,
	},

	button:{
		width: 150,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 15,
		marginVertical: 10,
		paddingVertical: 10
	},

	buttonText: {
		fontSize: 16,
		textAlign: 'center',
		color: '#ffffff'
	}


});