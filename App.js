import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import HomeScreen from './src/screen/HomeScreen'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
        <HomeScreen/>
    </SafeAreaView>
  )
}
export default App