import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,Image,ImageBackground,Animated} from 'react-native';
class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return(
      <Animated.Image
      onLoad={this.onLoad}
      {...this.props}
      style={[
        {
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              })
            }
          ]
        },
          this.props.style,
        ]}
        />
      )
  }
}
export default class Logo extends Component<{}> {
	render() {
		return(
			<View style={styles.container}>
				 <ImageLoader
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
      fontSize: 20,
      color : 'rgba(255, 255, 255, 0.7)'
    },

	



});