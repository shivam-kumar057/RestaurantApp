import React from "react";
import { TouchableOpacity, Dimensions, View, Text } from "react-native";
import { HomeStyles } from "../../styles/homeStyle/HomeStyle";
import CustomImage from "../common/CustomImage";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeSpecialDishComponent = ({ source, special, DeliveryTime }) => {
    return (
        <TouchableOpacity style={[HomeStyles.homeSpecialDishContainer]}>
            <View style={{ width: '50%', height: 90 }}>
                <CustomImage
                    source={source}
                />
            </View>
            <View style={[HomeStyles.hotelNameStyle]}>
                <Text>{special}</Text>
                <Text>{DeliveryTime}</Text>
            </View>

        </TouchableOpacity>
    )
}
export default HomeSpecialDishComponent;