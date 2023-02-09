import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextStyles } from '../styles/TextInputStyle';
import CustomTextInput from './common/CustomTextInput';
import { AppConstant } from '../constant/AppConstant';

const CustomSearchBar = ({placeholder,onChangeText,searchStyle}) => {
    return (
        <View style={[TextStyles.textInputContainer,searchStyle]}>
            <View style={[TextStyles.serchStyle]}>
                <Icon name={AppConstant.search} size={20} color="#262626" />
                <View style={[TextStyles.textInputStyle]}>
                     <CustomTextInput
                       placeholder={placeholder}
                       onChangeText={onChangeText}
                     />
                </View>
            </View>
            <View style={[TextStyles.microPhoneStyle]}>
              <Icon name={AppConstant.micro_Phone} size={20} color="#262626" />
            </View>
        </View>
    )
}
export default CustomSearchBar;