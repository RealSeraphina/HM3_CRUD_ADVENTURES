import React, { useContext } from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import { Context } from "../context/HeroContext";

import NavBar from "../componets/NavBar";

const HeroDetailScreen = (props) => {
    const { state, levelHero } = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const currentHero = state.find((currentHero) => {
        return heroID === currentHero.id;
    })

    return <View style={styles.container}>
        <View style={styles.container}>
            <Text>{currentHero.name}</Text>
            <Text>Level: {currentHero.level}</Text>
            <Text>Health: {currentHero.currentHealth}/{currentHero.maxHealth}</Text>
            <Text>Power: {currentHero.power}</Text>
            <Text>Gold: {currentHero.gold}</Text>
            <Button title="Level Up (10 Gold)" onPress={(gold) => {levelHero(heroID, gold)}} />
        </View>
        <NavBar />
    </View>
}

const styles = StyleSheet.create({
    container:{
        //borderColor: 'red',
        //borderWidth: 3,
        flex: 1
    },
})

export default HeroDetailScreen;