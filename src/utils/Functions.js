import {
  Dimensions,
  PixelRatio,
} from 'react-native';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 812;

export class Functions {

  getScaledValue(size = 0, height = 0) {
    if (size !== 0) {
      const newSize = size * scale
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
      }
    } else {
      const newSize = height * scaleHeight;
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
      }
    }
  }

}

export default new Functions();
