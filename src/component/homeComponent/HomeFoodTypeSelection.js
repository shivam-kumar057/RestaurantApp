import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { HomeStyles } from "../../styles/homeStyle/HomeStyle";


const HomeFoodTypeSelection = ({ foodType }) => {
    const [ids, setIds] = useState(1)
    const onPress = (item) => {
        if (item) {
            setIds(item)
        }
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onPress(item.id)} style={[HomeStyles.homeTypeStyle, { backgroundColor: item.id === ids ? '#FC4C02' : "lightgray" }]}>
                <Text>{item.types}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={foodType}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    )
}

export default HomeFoodTypeSelection