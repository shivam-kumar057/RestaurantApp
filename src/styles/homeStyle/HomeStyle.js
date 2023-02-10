import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeStyles = StyleSheet.create({
    headerContainer: {
        width: windowWidth,
        height: windowHeight / 5,
        backgroundColor: 'white',
        padding: 10,
        elevation: 5,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        paddingLeft: 20,
        justifyContent: 'space-around'

    },
    search: {
        width: '85%',
        height: 40
    },
    nameStyle: {
        fontSize: 16
    },
    headingStyle: {
        fontSize: 32,
        fontWeight: '700',
    },
    homeSearchStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    homeFilterStyle: {
        height: 40,
        width: 40,
        backgroundColor: '#FC4C02',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    homeSpecialDishStyle: {
        height: 200,
        width: windowWidth / 1.03,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'lightgray'
    },
    homeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    homeTypeStyle: {
        width: 100,
        height: 30,
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeDishImageStyle: {
        height: 90,
        width: '100%',
        justifyContent: 'flex-end'
    },
    homeTextDiscountStyle: {
        fontSize: 17,
        color: 'white',
        fontWeight: '700'
    },
    homeDiscountView: {
        bottom: 5,
        alignSelf: 'center'
    },
    homeSpecialDishContainer: {
        height: 90,
        width: windowWidth / 2.1,
        borderRadius: 10, margin: 5,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        shadowOffset: { width: 3, height: 1 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    hotelNameStyle : {
        width: '50%', 
        height: 90, 
        justifyContent: 'space-around', 
        alignItems: 'center'
    }
})