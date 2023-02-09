import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeStyles = {
    headerContainer :{
        width:windowWidth,
        height:windowHeight/5,
       backgroundColor:'white',
        padding:10, 
        elevation:5,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        shadowRadius: 3,  
        paddingLeft:20,
        justifyContent:'space-around'
        
    },
    search :{
        width:'85%',
        height:40
    },
    nameStyle :{
        fontSize:16
    },
    headingStyle : {
        fontSize: 32,
        fontWeight:'700',
    },
    homeSearchStyle : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    homeFilterStyle : {
        height:40,
        width:40,
        backgroundColor:'#FC4C02',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
}