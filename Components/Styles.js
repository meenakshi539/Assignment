import React, { StyleSheet, Platform, } from 'react-native'
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    navigationHeader: {
        backgroundColor: 'transparent',//uncomment post pushing
        borderBottomWidth: 0,
        justifyContent: "center",
        // marginHorizontal: 8
    },
    custumSlide: {
        height: 250,
        width: 250,
        backgroundColor: "#FFFFFF",
        borderColor: "#FCFCFC",
        marginTop: Platform.OS=="ios"?'-5%':'-4%',
        marginBottom: Platform.OS=="ios"?'-5%':'-7%',
        
    },
    profileWarn: {
        flexDirection: "row",
        marginTop: "5%",
        backgroundColor: "#ffe4b3",
        borderRadius: 10,
        padding: 4
    },
    inputText:{
        flexDirection: "row",
         flex: 0.8, 
         alignItems: "center",
          backgroundColor: "#F9FBFA", 
          borderRadius: 10
    }

})