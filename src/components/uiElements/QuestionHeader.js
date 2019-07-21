import React from "react";
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import Functions from "../../utils/Functions";
import {Colors} from "../../utils/Colors";

const QuestionHeader = (props) => {
  const styles = {
    container: {
      padding: 10,
      backgroundColor: Colors.blue
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    iconClose: {
      height: Functions.getScaledValue(25),
      width: Functions.getScaledValue(25),
    }

  };

  return (
    <View>
      <View style={[styles.container, props.style]}>
        <View style={styles.titleContainer}>
          <Text style={[TextStyles.textWhite12, {flex: 1}]}>{`QUESTION ${props.currentQuestion+1} of ${props.questions.length}`}</Text>
          <TouchableOpacity onPress={props.onClosePress}>
            <Image
              resizeMode={'contain'}
              source={require('../../assets/img/1.png')}
              style={styles.iconClose}/>
          </TouchableOpacity>
        </View>
        <Text style={[TextStyles.textWhite16, {marginTop: 10}]}>{props.questions[props.currentQuestion].question}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        {
          props.questions.map((data, index) => {
            return (
              <View key={index} style={{height: 5, backgroundColor: index === props.currentQuestion ? Colors.white :Colors.gray, flex: 1}}/>
            )
          })
        }
      </View>
    </View>
  )
}
export default QuestionHeader
