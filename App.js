import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import StackNavigation from './src/navigation/StackNavigation'
import HomeScreen from './src/screen/HomeScreen'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <HomeScreen/> */}
        <StackNavigation/>
    </SafeAreaView>
  )
}
export default App