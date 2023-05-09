import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, ScrollView } from "react-native";

import { Context } from "../context/HeroContext";

const HeroList = (props) => {
    const { state } = useContext(Context);
    const { hireHero } = useContext(Context);
    return <View style={styles.container}>
        <FlatList
        data={state}
        keyExtractor={(heros) => {return heros.name}}
        renderItem={({item}) => {
            return  <TouchableOpacity onPress={ () => {props.onSelect();}}>
                <View style = {styles.row}>                    
                    <Text style={styles.hero}>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} Gold: {item.gold}</Text>
                </View>
            </TouchableOpacity>
        }}
        />
</View>
}

const styles = StyleSheet.create({
    container:{
        //borderColor: 'red',
        //borderWidth: 3,
        flex: 1
    },
    row:{
        flexDirection: 'row',
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
        padding: 1,
        marginBottom: 5,
        minHeight: 75,
        flex: 1

    },
    hero:{
        fontSize: 25,
        color: "white",
        alignSelf: 'center',
        marginHorizontal: 10,
    },
});

export default HeroList;