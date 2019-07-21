import React from "react";
import {Image, Text, View} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import Functions from "../../utils/Functions";

const CellType = (props) => {
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
    <View style={[styles.container, props.style]}>
      <Text style={[TextStyles.textDarkBlue14, {flex: 1}]}>{props.title}</Text>
      <Text style={[TextStyles.textGray14, {flex: 1}]}>{props.data || '-'}</Text>
    </View>

  )
}
export default CellType
