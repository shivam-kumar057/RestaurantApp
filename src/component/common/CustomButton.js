import React from "react";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import {styles} from '../../styles/ButtonStyle'

const CustomButton = ({buttonStyle,buttonTextStyle}) =>{
    return (
        <TouchableOpacity style={[styles.buttonContainer,buttonStyle]}>
             <Text style={[styles.buttonText,buttonTextStyle]}>Button</Text>
        </TouchableOpacity>
    )
}
export default CustomButton