import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';

const NavBar = (props) => {

    return <View style={styles.container}>
        <TouchableOpacity style={styles.menu} onPress={() => {props.navigation.navigate("Roster")}}><Text style={styles.title}>Roster</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => {props.navigation.navigate("Adventure")}}><Text style={styles.title}>Adveture</Text></TouchableOpacity>
    </View>
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        //borderColor: "black",
        //borderWidth: 1,
        padding: 1,
        height: 100,
    },
    menu:{
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "cyan",        
        flexDirection: 'row',
        flex: .5,
        height: 100,
        
    },
    title:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
    }
})

export default withNavigation(NavBar);