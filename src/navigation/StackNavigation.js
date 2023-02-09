import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
// import ProductListingpage from '../screen/ProductListingpage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown : false
              }}
             
              
            >
                <Stack.Screen
                 name="TabNavigator" component={TabNavigation} />
                {/* <Stack.Screen name="ProductList" component={ProductListingpage} /> */}
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default StackNavigation