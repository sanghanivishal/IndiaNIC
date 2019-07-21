import React from "react";
import {Image, Text, View} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import Functions from "../../utils/Functions";
import {Colors} from "../../utils/Colors";

const Skills = (props) => {
  const styles = {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
      // marginStart: 10,
      marginBottom: 5,
    },


  };

  _displaySkills = () => {

    return props.data.map((item, index )=> {
      return (
        <View key={index + ""} style = {{width: item.display.length * 8 + 10 , marginEnd: 10, justifyContent: 'center'}}>
          <Text style={[{
            color: Colors.blue,
            backgroundColor: Colors.lightBlue,
            fontSize: 12,
            fontWeight: 'bold',
            height: Functions.getScaledValue(0, 30),
            justifyContent:'center',
            borderRadius: 2,
            paddingTop: Functions.getScaledValue(0, 5),
            marginTop: 5,
            textAlign: 'center',
          }]}>{item.display}</Text>
        </View>
      );
    });
  };

  return (
    <View style={[styles.container, props.style]}>
      {this._displaySkills()}
    </View>

  )
}
export default Skills
