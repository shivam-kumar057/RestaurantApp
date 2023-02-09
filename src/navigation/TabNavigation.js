import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import WishListScreen from '../screen/WishListScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import LiveChat from '../screen/LiveChat';
import ProfileScreen from '../screen/ProfileScreen';
import MenuScreen from '../screen/MenuScreen'

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'orange',
                headerShown: false,
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconname = ''
                    if (route.name === "liveChat") {
                        iconname = 'wechat'
                    } else if (route.name === 'profile') {
                        iconname = 'list'
                    } else if (route.name === 'Home') {
                        iconname = 'home'
                    } else if (route.name === 'wishList') {
                        iconname = 'heart'
                    } else if (route.name === 'menu') {
                        iconname = 'spoon'
                    }
                    return (
                        <FontAwesome5 name={iconname} size={22} color={focused ? "orange" : 'gray'} />
                    )
                }
            })
            }
        >
            <Tab.Screen name="liveChat" component={LiveChat} />
            <Tab.Screen name="profile" component={ProfileScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="menu" component={MenuScreen} />
            <Tab.Screen name="wishList" component={WishListScreen} />
        </Tab.Navigator>

    )
}

export default TabNavigation