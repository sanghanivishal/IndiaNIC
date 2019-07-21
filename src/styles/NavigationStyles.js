import {StyleSheet} from "react-native";

export const NavigationStyles = StyleSheet.create({
    headerTitleStyleCenter: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        fontWeight:'bold',
    },
    headerStyle: {
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOpacity: 0.7,
        elevation: 5,
        shadowOffset: { width: 0, height: 0.1},
        backgroundColor: 'white',
    },
    headerLeftPadding: {
        paddingLeft: 20,
    },
    headerRightPadding: {
        paddingRight: 20,
    },
});
