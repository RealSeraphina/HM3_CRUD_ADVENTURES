import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, ScrollView } from "react-native";

import { Context } from "../context/HeroContext";
import NavBar from "../componets/NavBar";



const RosterScreen = (props) => {

    const { state } = useContext(Context);
    const { hireHero } = useContext(Context);
    //console.log(state);

    return <View style={styles.container}>
        <Text>Roster</Text>        
        <FlatList
            data={state}
            keyExtractor={(heros) => {return heros.name}}
            renderItem={({item}) => {
                return  <TouchableOpacity onPress={ () => {props.navigation.navigate("Hero", {id : item.id})}}>
                    <View style = {styles.row}>                    
                        <Text>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} Gold: {item.gold}</Text>
                    </View>
                </TouchableOpacity>
            }}
        />
        <Button title="Hire A New Hero" onPress= {() => {hireHero()}} />
        <Text>Roster Screen!</Text>
        
        <NavBar />
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
        borderColor: "black",
        borderWidth: 1,
        padding: 1,
        flex: 1

    },
    icon: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    debug: {
        borderColor: "red",
        borderWidth: 5
    }
});

export default RosterScreen;