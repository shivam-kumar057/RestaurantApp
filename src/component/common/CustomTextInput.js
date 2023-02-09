import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { TextStyles } from '../../styles/TextInputStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = ({placeholder,onChangeText}) => {
    return (
                <View style={[TextStyles.textInputStyle]}>
                    <TextInput
                        style={{height:40,}}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                     />
                </View>
    )
}
export default CustomTextInput;