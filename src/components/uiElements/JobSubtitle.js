import React from "react";
import {Image, Text, View} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import Functions from "../../utils/Functions";

const JobSubtitle = (props) => {
  const styles = {
    container: {
      flexDirection: 'row'
    },
    iconArrow: {
      height: Functions.getScaledValue(15),
      width: Functions.getScaledValue(15),
      marginHorizontal: 10
    }

  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.textGray14, {flex: 1}]}>{props.title}</Text>
      <Image
        resizeMode={'contain'}
        source={require('../../assets/img/arrow.png')}
        style={styles.iconArrow}/>
    </View>

  )
}
export default JobSubtitle
