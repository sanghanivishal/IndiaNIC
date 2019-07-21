import React from "react";
import {createStackNavigator} from "react-navigation";
import {TouchableOpacity, View, Text} from "react-native";
import {NavigationStyles} from "../styles/NavigationStyles";
import Dashboard from "../components/Dashboard";
import VideoRecording from "../components/VideoRecording";
import SplashScreen from "../components/SplashScreen";


export default DashboardStack = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            header: null,
        })
    },
    VideoRecording: {
        screen: VideoRecording,
        navigationOptions: ({navigation}) => ({
            header: null,
        })
    },

    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: ({navigation}) => ({
            header: null,
        })
    },

}, {
    initialRouteName: 'SplashScreen'
});
