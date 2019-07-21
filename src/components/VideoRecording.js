import React, {PureComponent} from 'react'
import {
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native'
import {connect} from "react-redux";
import Actions from "../internal/modules/Actions";
import Functions from "../utils/Functions";
import {Colors} from "../utils/Colors";
import {RNCamera} from 'react-native-camera';
import QuestionHeader from "./uiElements/QuestionHeader";

class VideoRecording extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      currentQuestion: 0,
      reset: false,
      isUploading: false
    };
  }

  componentDidMount() {

  }

  componentWillUpdate(nextProps) {
    if (nextProps.uploadStatus) {
      this.setState({isUploading: false})
      if (nextProps.uploadStatus.status === 1) {
        Alert.alert("Success", "Test submitted successfully.",
          [
            {text: 'OK', onPress: () => this.props.navigation.goBack()},
          ],
          {cancelable: false})
      } else {
        alert('Upload failed.')
      }
    }
  }

  componentWillUnmount() {

  }

  startStopRecording() {
    if (this.state.isRecording) {
      alert("Cannot pause video while questioning.");
      return;
      this.stopRecording()
    } else {
      this.startRecording()
    }
  }

  async startRecording() {
    this.setState({isRecording: true});
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.recordAsync({
        quality: RNCamera.Constants.VideoQuality['720p']
      });

      if (this.state.reset) {
        this.setState({reset: false});
      } else {
        this.submitQuestions(data.uri);
      }
    }
  }

  submitQuestions(path) {
    let header = {
      "jabritoken": "518ea07f60c18e417a051a07f60ca07f60c",
    };

    const data = new FormData();
    data.append('filename', 'video_jabri.mp4');
    data.append('file', {
      uri: path,
      type: "video",
      name: "video_jabri.mp4"
    });
    data.append('jobpost_id', "5d230c96518e417a07f60c05");
    data.append('user_id', "5d0e16859d28851515676836");
    data.append('from_mode', "no");
    this.props.jobDetails.questions.forEach(function (item, index) {
      data.append('question_id', item._id);
    });

    this.setState({isUploading: true})
    this.props.resetUploadStatus()
    this.props.uploadJob(data, header)

  }

  stopRecording() {
    this.setState({isRecording: false});
    this.camera.stopRecording();
  }

  retry() {
    this.setState({currentQuestion: 0, reset: true}, () => this.stopRecording())
  }

  nextQuestion() {
    if (!this.state.isRecording) {
      alert("Please start video to continue.")
      return
    }
    if (this.state.currentQuestion < (this.props.jobDetails.questions.length - 1)) {
      this.setState({currentQuestion: this.state.currentQuestion + 1})
    } else {
      this.stopRecording()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <QuestionHeader
          onClosePress={() => this.props.navigation.goBack()}
          questions={this.props.jobDetails.questions}
          currentQuestion={this.state.currentQuestion}
          style={{marginTop: Functions.getScaledValue(0, 30)}}/>


        <RNCamera
          cameraType="front"
          ref={ref => {
            this.camera = ref;
          }}

          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.controllerContainer}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.retry()}>
              <Image
                resizeMode={'contain'}
                source={require('../assets/img/reset.png')}
                style={styles.iconPlayPause}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.startStopRecording()}>
            <View style={{
              borderRadius: Functions.getScaledValue(50 / 2),
              backgroundColor: Colors.blue,
              justifyContent: 'center',
              alignItems: 'center',
              height: Functions.getScaledValue(50), width: Functions.getScaledValue(50)
            }}>
              <Image
                resizeMode={'contain'}
                source={this.state.isRecording ? require('../assets/img/circle.png') :
                  require('../assets/img/play-button.png')}
                style={styles.iconPlayPause}/>
            </View>
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.nextQuestion()}>
              <Image
                resizeMode={'contain'}
                source={require('../assets/img/nextq.png')}
                style={styles.iconPlayPause}/>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isUploading ? <ActivityIndicator size="large" color="black" style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, top: 0
        }}/> : null}

      </View>
    )
  }
}


export default connect(
  appState => ({
    jobDetails: appState.common.get('jobDetails'),
    uploadStatus: appState.common.get('uploadStatus')
  }),
  dispatch => ({
    uploadJob: (params, header) => dispatch(Actions.common.uploadJob(params, header)),
    resetUploadStatus: () => dispatch(Actions.common.resetUploadStatus()),
  }),
)(VideoRecording);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconPlayPause: {
    tintColor: 'white',
    height: Functions.getScaledValue(25),
    width: Functions.getScaledValue(25),
  },
  controllerContainer: {
    position: 'absolute',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 20,
    right: 20,
    left: 20,
  }
});
