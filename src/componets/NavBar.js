import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';

const NavBar = (props) => {

    return <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate("Roster")}}><Text>Roster</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Adventure")}}><Text>Advetures</Text></TouchableOpacity>
    </View>
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderColor: "black",
        borderWidth: 1,
        padding: 1,
        height: 100
    },
    menu:{
        flexDirection: 'row',
        height: 100,
        
    }
})

export default withNavigation(NavBar);