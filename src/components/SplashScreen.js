import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from "../utils/Colors";
import Functions from "../utils/Functions";
import {connect} from "react-redux";
import Actions from "../internal/modules/Actions";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
      isLoading: false,
    };
  }

  getJobsDetails() {

    let params = {
      job_id: "5d230c96518e417a07f60c05"
    };

    let header = {
      "jabritoken": "518ea07f60c18e417a051a07f60ca07f60c",
      "Content-Type": "application/json"
    };

    this.setState({isLoading: true})
    this.props.getJobDetails(params, header)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.jobDetails) {
      this.props.navigation.navigate('Dashboard')
      this.setState({isLoading: false})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'cover'}
          source={require('../assets/img/Bitmap.png')}
          style={styles.image}/>
        <View style={styles.backgroundOverlay}/>
        <View style={styles.logoContainer}>
          <Image
            resizeMode={'contain'}
            source={require('../assets/img/google-logo.png')}
            style={styles.logoStyle}/>

        </View>
        <TouchableOpacity
          onPress={() => this.getJobsDetails()}
          style={styles.buttonContainer}>
          {this.state.isLoading ?
            <ActivityIndicator size="large" color="black" style={{
              position: 'absolute', left: 0, right: 0, bottom: 0, top: 0
            }}/>:
            <Image
              resizeMode={'contain'}
              source={require('../assets/img/continue.png')}
              style={styles.button}/>}

        </TouchableOpacity>
      </View>
    )
  }

};


export default connect(
  appState => ({
    jobDetails: appState.common.get('jobDetails')
  }),
  dispatch => ({
    getJobDetails: (params, header) => dispatch(Actions.common.getJobDetails(params, header)),
  }),
)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    resizeMode: 'cover',
    width: 'auto'
  },
  backgroundOverlay: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.splashOverlay
  },
  logoContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    height: Functions.getScaledValue(0, 120),
    width: Functions.getScaledValue(240)
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: Functions.getScaledValue(0, 80),
    alignItems: 'center'
  },
  button: {
    height: Functions.getScaledValue(0, 100)
  }
});

