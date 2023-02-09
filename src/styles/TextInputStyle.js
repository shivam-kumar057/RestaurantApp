import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const TextStyles = StyleSheet.create({
    textInputContainer :{
        height:50,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        shadowOffset: {width: 5, height: 5},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        shadowRadius: 10,  
    },
    buttonText :{
        fontSize:20
    },
    textInputStyle :{
        height:40,
       width:'90%',
       left:5
    },
    serchStyle :{
        flexDirection:'row',
        width:'75%',
        alignItems:'center',
        justifyContent:'space-around',
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