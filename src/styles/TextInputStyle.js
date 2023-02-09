import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const TextStyles = StyleSheet.create({
    textInputContainer :{
        height:50,
        width: '80%',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
    },
    buttonText :{
        fontSize:20
    },
    textInputStyle :{
        height:40,
        width:'80%',
    },
    serchStyle :{
        flexDirection:'row',
        width:'83%',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    microPhoneStyle:{
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center'
    },
    headerTitleStyle : {
        width: windowWidth / 2, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})