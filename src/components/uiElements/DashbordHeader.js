import React from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Functions from "../../utils/Functions";
import {TextStyles} from "../../styles/TextStyles";

const DashboardHeader = (props) => {
  const styles = {
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Functions.getScaledValue(0, 40),
      paddingBottom: Functions.getScaledValue(0, 10)
    },
    logoStyle: {
      height: Functions.getScaledValue(50),
      width: Functions.getScaledValue(50)
    },
    iconLocation: {
      height: Functions.getScaledValue(15),
      width: Functions.getScaledValue(15)
    },
    iconClose: {
      height: Functions.getScaledValue(25),
      width: Functions.getScaledValue(25),
      tintColor: 'black'
    }
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../assets/img/google-big.png')}
        style={styles.logoStyle}/>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/img/15.png')}
          style={styles.iconLocation}/>
        <Text style={[TextStyles.textGray12, {marginTop: Functions.getScaledValue(0, 10), marginLeft: 10}]}>Palo Alto,
          CA, USA</Text>
      </View>

      <TouchableOpacity style={{position: 'absolute', left: 10, top: Functions.getScaledValue(0, 45)}}
                        onPress={props.onClosePress}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/img/left-arrow.png')}
          style={styles.iconClose}/>
      </TouchableOpacity>
    </View>

  )
}
export default DashboardHeader
