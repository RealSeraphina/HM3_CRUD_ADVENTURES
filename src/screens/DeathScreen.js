import React, { useContext }  from "react";
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/HeroContext";

import NavBar from "../componets/NavBar";

const DeathScreen = (props) => {
    const heroName = props.navigation.getParam("name");
    return <View style={styles.container}>
        <View style={styles.container}>
            <Text>The entrepid hero {heroName} has met their end. </Text>
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

export default DeathScreen;