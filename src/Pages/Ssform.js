import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,TextInput,TouchableOpacity} from 'react-native';

export default class Logo extends Component<{}> {
	   _call(){
  alert('Server Not Found ERROR 404');
}
	state={
		name:'',
		age:'',
		phone: '',
		gender:'',
		address:'',
		rpersonN1:'',
		rpersonN1p:'',
		rpersonN2:'',
		rpersonN2p:'',
	}

	render() {
		return(
			<View style={styles.container}>
				<TextInput style={styles.inputBox}
				  placeholder="Name"
				  placeholderTextColor = "#ffffff"
				  onChangeText={name => this.setState({ name })}
          			value={this.state.name}
				  />
				   <TextInput style={styles.inputBox}
				  placeholder="Age "
				  placeholderTextColor = "#ffffff"
				  onChangeText={age => this.setState({ age })}
          			value={this.state.age}
				  />
				  <TextInput style={styles.inputBox}
				  placeholder="Gender"
				  placeholderTextColor = "#ffffff"
				   onChangeText={gender => this.setState({ gender })}
          			value={this.state.gender}
				  />
				  <TextInput style={styles.inputBox}
				  placeholder="Phone Number "
				  placeholderTextColor = "#ffffff"
				  onChangeText={phone => this.setState({ phone })}
          			value={this.state.phone}
				  />
				  
				  <TextInput style={styles.inputBox}
				  placeholder="Address"
				  placeholderTextColor = "#ffffff"
				   onChangeText={address => this.setState({ address })}
          			value={this.state.address}
				  />
				 <TextInput style={styles.inputBox}
				  placeholder="Relation person name"
				  placeholderTextColor = "#ffffff"
				  onChangeText={rpersonN1 => this.setState({ rpersonN1 })}
          			value={this.state.rpersonN1}
				  />
				  <TextInput style={styles.inputBox}
				  placeholder="Phone Number"
				  secureTextEntry={true}
				  placeholderTextColor = "#ffffff"
				  onChangeText={rpersonN1p => this.setState({ rpersonN1p })}
          			value={this.state.rpersonN1p}
				  />
				  <TextInput style={styles.inputBox}
				  placeholder="Relation person name"
				  secureTextEntry={true}
				  placeholderTextColor = "#ffffff"
				  onChangeText={rpersonN2 => this.setState({ rpersonN2 })}
          			value={this.state.rpersonN2}
				  />
				  <TextInput style={styles.inputBox}
				  placeholder="Phone number"
				  secureTextEntry={true}
				  placeholderTextColor = "#ffffff"
				  onChangeText={rpersonN2p => this.setState({ rpersonN2p })}
          			value={this.state.rpersonN2p}
				  />

				  <TouchableOpacity style={styles.button} onPress={this._call}>
				  <Text style={styles.buttonText}>Complete SignUp</Text>
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
		borderRadius: 5,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#ffffff',
		marginVertical: 7,
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