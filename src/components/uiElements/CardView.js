import React from "react";
import {View} from 'react-native';

const CardView = ({children, style}) => {
    const styles = {
        container: {
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            margin: 5,
            // its for android
            elevation: 5,
            position:'relative',
        }
    };

    return (
      <View style={[styles.container, style]}>
          {children}
      </View>

    )
}
export default CardView
