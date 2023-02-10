import React from 'react'
import { StyleSheet, View,  SafeAreaView, FlatList} from 'react-native'
import CustomHeader from '../component/common/CustomHeader'
import HomeHeaderComponent from '../component/homeComponent/HomeHeaderComponent'
import { hotalName } from '../json/HotalNameJsonServer'
import { foodType } from '../json/FoodTypeJsonServer'
import HomeSpecialDishComponent from '../component/homeComponent/HomeSpecialDishComponent'
import HomeFoodTypeSelection from '../component/homeComponent/HomeFoodTypeSelection'
import { HomeStyles } from '../styles/homeStyle/HomeStyle'

const HomeScreen = () => {

    const ListHeaderComponent = () => {
        return (
            <>
               <HomeHeaderComponent  
                  userName={"Hello Shivam,"}
                  placeholder={"Search food and restaurents"}
               />
               <HomeFoodTypeSelection
                  foodType={foodType}
               />
               <View style={[HomeStyles.homeSpecialDishStyle]}>

               </View>
            </>
        )
    }

    const renderItem = ({ item }) => {
        return (
           <HomeSpecialDishComponent 
              source = {item.hotalDishUrl}
              special={item.special}
              DeliveryTime={item.DeliveryTime}
           />
        )
    }

    return (
        <SafeAreaView style={[HomeStyles.homeContainer]}>
            <CustomHeader
               textInputStyle={{ borderRadius: 0 }}
               menus headerText={'order Now'}
                />

            <View style={{ flex: 1, }}>
                <FlatList
                    ListHeaderComponent={ListHeaderComponent}
                    showsHorizontalScrollIndicator={true}
                    data={hotalName}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default HomeScreen;