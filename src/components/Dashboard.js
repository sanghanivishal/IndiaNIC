import React, {Component} from 'react'
import {
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  View, Text, TouchableOpacity,
} from 'react-native'
import {connect} from "react-redux";
import Actions from "../internal/modules/Actions";
import {Colors} from "../utils/Colors";
import DashboardHeader from "./uiElements/DashbordHeader";
import {TextStyles} from "../styles/TextStyles";
import Functions from "../utils/Functions";
import CardView from "./uiElements/CardView";
import JobSubtitle from "./uiElements/JobSubtitle";
import CellType from "./uiElements/CellType";
import Skills from "./uiElements/Skills";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetails: null
    };
  }

  componentDidMount() {

  }

  static getDerivedStateFromProps(props, state) {
    return {
      jobDetails: props.jobDetails
    };
  }

  componentWillUnmount() {

  }

  applyJob() {
    this.props.navigation.navigate('VideoRecording')
  }


  render() {
    const {jobDetails} = this.state
    if (!jobDetails)
      return (<View/>);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <DashboardHeader
          onClosePress={() => this.props.navigation.goBack()}/>
        <View
          style={styles.expiryContainer}>
          <Image
            resizeMode={'contain'}
            source={require('../assets/img/15Copy.png')}
            style={styles.iconTime}/>
          <Text style={[TextStyles.textGray12]}>{`Expires in ${jobDetails.data.job_expiry} days`}</Text>
        </View>
        <View style={{paddingHorizontal: 10, backgroundColor: Colors.background}}>
          <CardView style={{borderRadius: 10, padding: Functions.getScaledValue(0, 20)}}>
            <JobSubtitle
              title={'Job description'}/>
            <Text
              style={[TextStyles.textDarkBlue16, {marginTop: Functions.getScaledValue(0, 20)}]}>{jobDetails.data.title}</Text>
            <Text style={[TextStyles.textGray12, {marginTop: Functions.getScaledValue(0, 20)}]}>{
              jobDetails.data.description}</Text>

            <CellType
              style={{marginTop: Functions.getScaledValue(0, 20)}}
              data={jobDetails.data.salary}
              title={'Salary:'}/>

            <CellType
              style={{marginTop: Functions.getScaledValue(0, 10)}}
              data={jobDetails.data.industry}
              title={'Industry:'}/>

            <CellType
              style={{marginTop: Functions.getScaledValue(0, 10)}}
              data={jobDetails.data.role_cate}
              title={'Role Category:'}/>

            <CellType
              style={{marginTop: Functions.getScaledValue(0, 10)}}
              data={jobDetails.data.role}
              title={'Role:'}/>

            <CellType
              style={{marginTop: Functions.getScaledValue(0, 10)}}
              data={jobDetails.data.functional_area}
              title={'Functional Area:'}/>

            <CellType
              style={{marginTop: Functions.getScaledValue(0, 10)}}
              data={jobDetails.data.position}
              title={'Employment Type:'}/>
          </CardView>

          <CardView style={{
            borderRadius: 10,
            flex: 1,
            marginTop: Functions.getScaledValue(20),
            padding: Functions.getScaledValue(0, 20)
          }}>
            <JobSubtitle
              title={'Skills'}/>

            <Skills
              data={this.props.jobDetails.data.key_skill}
            />


          </CardView>

          <CardView style={{
            borderRadius: 10,
            marginTop: Functions.getScaledValue(20),
            padding: Functions.getScaledValue(0, 20)
          }}>
            <JobSubtitle
              title={'Company Profile'}/>

            <Text style={[TextStyles.textGray12, {marginTop: Functions.getScaledValue(0, 20)}]}>{
              jobDetails.data.description}</Text>

          </CardView>

          <TouchableOpacity
            onPress={() => this.applyJob()}
            style={styles.buttonContainer}>
            <Image
              resizeMode={'contain'}
              source={require('../assets/img/applybutton.png')}
              style={styles.button}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}


export default connect(
  appState => ({
    jobDetails: appState.common.get('jobDetails')
  }),
  dispatch => ({}),
)(Dashboard);

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // flex: 1,
    backgroundColor: Colors.background,
  },
  expiryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.background, padding: Functions.getScaledValue(0, 20)
  },
  iconTime: {
    height: Functions.getScaledValue(15),
    width: Functions.getScaledValue(15),
    marginRight: 10
  },
  buttonContainer: {

    alignItems: 'center'
  },
  button: {
    height: Functions.getScaledValue(0, 100)
  }

});
