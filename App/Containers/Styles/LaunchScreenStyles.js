import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  launch2: {
    marginTop: Metrics.tripleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
},

backgroundImage: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
},

ready: {
    width: 300,
    height: 80
}
})
