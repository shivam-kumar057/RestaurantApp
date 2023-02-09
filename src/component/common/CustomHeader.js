import React from "react";
import { View, Text, Dimensions } from 'react-native'
import { TextStyles } from "../../styles/TextInputStyle";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppConstant } from "../../constant/AppConstant";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomHeader = ({ menus, headerText, onPressMenu, onPressCart ,textInputStyle , headerTextStyle}) => {
    return (
        <View style={[TextStyles.textInputContainer, textInputStyle ,{ width: windowWidth,shadowOpacity:0.2 }]} >
            <Ionicons onPress={onPressMenu} name={menus ? AppConstant.menu : AppConstant.arrow_back} size={20} color="#262626" />
            <View style={[TextStyles.headerTitleStyle]}>
                <Text style={[TextStyles.headerStyle, headerTextStyle]}>{headerText}</Text>
            </View>
            <Entypo onPress={onPressCart} name={'shopping-cart'} size={20} color="#262626" />
        </View>
    )
}
export default CustomHeader