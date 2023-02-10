import React from "react";
import { View, Text } from 'react-native'
import { HomeStyles } from "../../styles/homeStyle/HomeStyle";
import CustomSearchComponent from '../CustomSearchBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppConstant } from "../../constant/AppConstant";

const HomeHeaderComponent = ({userName,placeholder}) => {
    return (
        <View style={[HomeStyles.headerContainer]}>
            <>
            <Text style={[HomeStyles.nameStyle]}>{userName}</Text>
            <Text style={[HomeStyles.headingStyle]}>what would you like to <Text style={{color:'#FC4C02'}}>eat ?</Text></Text>
            </>
            <View style={[HomeStyles.homeSearchStyle]}>
                <CustomSearchComponent
                    searchStyle={HomeStyles.search}
                    placeholder={placeholder}
                />
                 <View style={[HomeStyles.homeFilterStyle]}>
                 <Icon name={AppConstant.indent} size={23} color="white" />
                 </View>
            </View>
        </View>
    )
}
export default HomeHeaderComponent;