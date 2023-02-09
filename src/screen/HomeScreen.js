import React from 'react'
import {StyleSheet ,View ,Text, SafeAreaView} from 'react-native'
import CustomButton from '../component/common/CustomButton'
import CustomHeader from '../component/common/CustomHeader'
import CustomTextInput from '../component/common/CustomTextInput'
import CustomSearchBar from '../component/CustomSearchBar'

const HomeScreen = () =>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            {/* <CustomButton /> */}
            {/* <CustomTextInput/> */}
            {/* <CustomSearchBar/> */}
            <CustomHeader menus headerText={'order Now'}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default HomeScreen;