import React, { Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Fpg from './Pages/Fpg';
import Tlogin from './Pages/Tlogin';
import Ssignup from './Pages/Ssignup';
import Ssform from './Pages/Ssform';
import Loading from './Pages/Loading';
import Startpage from './Pages/Startpage';
import Actionpage from './Pages/Actionpage';
import Location from './Pages/Location';

export default class Routes extends Component<{}> {
	render() {
		return( 
			<Router navigationBarStyle={{ backgroundColor: '#3d5afe' }}>
		    	<Stack key="root" >
		    		<Scene key="loading" component={Loading} hideNavBar={true}/>
		    		<Scene key="startpage" component={Startpage} hideNavBar={true}/>
		      		<Scene key="fpg" component={Fpg} hideNavBar={true} />
		          	<Scene key="tlogin" component={Tlogin} title="Login"/>
				    <Scene key="ssignup" component={Ssignup} title="Signup"/>
				    <Scene key="ssform" component={Ssform} title="Profile"/>
				    <Scene key="loading" component={Loading} hideNavBar={true}/>
				    <Scene key="actionpage" component={Actionpage} hideNavBar={true}/>	
				    <Scene key="location" component={Location} hideNavBar={true}/>			     
		    	</Stack>
		  	</Router>
		)	
		
	} 
}