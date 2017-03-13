import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import { Images } from '../Themes'
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'
import RoundedButton from '../Components/RoundedButton'

export default class LaunchScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background3} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch2} style={styles.launch2} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} style={styles.ready} />
            <RoundedButton
              text='login'
              onPress={Actions.login}
            />
          </View>

        </ScrollView>
      </View>
    )
  }
}
