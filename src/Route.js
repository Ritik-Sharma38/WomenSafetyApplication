import React, { Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Startpage from './pages/Startpage'
import Actionpage from './pages/Actionpage'

export default class Route extends Component {
    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#3d5afe' }}>
                <Stack key="root">
                    <Scene key="Startpage" component={Startpage} hideNavBar={true} />
                    <Scene key="actionPage" component={Actionpage} hideNavBar={true} />
                </Stack>
            </Router>
        )
    }
}
