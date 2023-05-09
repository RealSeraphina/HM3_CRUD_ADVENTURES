import React, { useContext } from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/HeroContext";

import NavBar from "../componets/NavBar";

const HeroDetailScreen = (props) => {
    const { state, levelHero } = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const heroLevel = props.navigation.getParam("level");
    //console.log(heroLevel);
    const currentHero = state.find((currentHero) => {
        return heroID === currentHero.id;
    })

    return <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.name}>{currentHero.name}</Text>
            <Text style={styles.detail}>Level: {currentHero.level}</Text>
            <Text style={styles.detail}>Health: {currentHero.currentHealth}/{currentHero.maxHealth}</Text>
            <Text style={styles.detail}>Power: {currentHero.power}</Text>
            <Text style={styles.detail}>Gold: {currentHero.gold}</Text>
        </View>
        
        <TouchableOpacity style={styles.lvup} onPress={() => {levelHero(heroID)}}>
                <Text style={styles.lvupText}>Level Up For Only {currentHero.level * 10} Gold!</Text>
            </TouchableOpacity>
        <NavBar />
    </View>
}

const styles = StyleSheet.create({
    container:{
        //borderColor: 'red',
        //borderWidth: 3,
        flex: 1
    },
    lvup:{
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "purple",        
        flexDirection: 'row',
        height: 50,        
    },
    lvupText:{
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
    },
    name:{
        fontWeight: "bold",
        fontSize: 45,
        alignSelf: "center",
        textAlign: "center",
    },
    detail:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
        padding: 5,
    },
})

export default HeroDetailScreen;