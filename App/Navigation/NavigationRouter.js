import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
// import LoginActions from '../Redux/LoginRedux'

// screens identified by the router
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
// import ListviewExample from '../Containers/ListviewExample'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='launchScreen' component={LaunchScreen} title='RoadieApp' showNavBar />
            <Scene key='login' component={LoginScreen} title='Login' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
