import React from "react";
import { Image, ImageBackground,View ,Text} from "react-native";
import { HomeStyles } from "../../styles/homeStyle/HomeStyle";

const CustomImage = ({source}) =>{
    return (
       <ImageBackground imageStyle={{borderTopLeftRadius :15,borderBottomLeftRadius:15}} blurRadius={2} source = {{uri :source}} style={[HomeStyles.homeDishImageStyle]}>
            <View style={[HomeStyles.homeDiscountView]}>
                <Text style = {[HomeStyles.homeTextDiscountStyle]}>30% OFF</Text>
                <Text style ={[HomeStyles.homeTextDiscountStyle,{fontSize:16}]}> up to 75</Text>
            </View>
       </ImageBackground>
    )
}
export default CustomImage;