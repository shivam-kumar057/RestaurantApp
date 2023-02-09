import React from 'react'
import {StyleSheet ,View ,Text, SafeAreaView} from 'react-native'
import CustomHeader from '../component/common/CustomHeader'
import HomeHeaderComponent from '../component/homeComponent/HomeHeaderComponent'

const HomeScreen = () =>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <CustomHeader textInputStyle={{borderRadius:0}} menus headerText={'order Now'} />
            <HomeHeaderComponent/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default HomeScreen;