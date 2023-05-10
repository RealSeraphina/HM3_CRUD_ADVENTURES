import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, ScrollView } from "react-native";

import { Context } from "../context/HeroContext";
import HeroList from "../componets/HeroList";
import NavBar from "../componets/NavBar";



const RosterScreen = (props) => {

    const { state } = useContext(Context);
    const { hireHero } = useContext(Context);
    const heroUpdate = {status: "No Update"};
    //console.log(heroUpdate);
    //console.log(state);
    //console.log(state);
    return <View style={styles.container}>   
        <Text style={styles.title}>Hero Roster</Text>
        {/* <HeroList 
            onSelect={()=>{props.navigation.navigate("Hero", {id : state.id, level: state.level})}}
        /> */}
        <FlatList
            data={state}
            keyExtractor={(heros) => {return heros.name}}
            renderItem={({item}) => {
                return  <TouchableOpacity onPress={ () => {props.navigation.navigate("Hero", {id : item.id, level: item.level, heroUpdate})}}>
                    <View style = {styles.row}>                    
                        <Text style={styles.hero}>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} Gold: {item.gold}</Text>
                    </View>
                </TouchableOpacity>
            }}
        />
        <TouchableOpacity style={styles.hireBTN} onPress= {() => {hireHero()}}>
            <Text style={styles.hireText}>Hire A New Hero!</Text>
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
    icon: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    debug: {
        borderColor: "red",
        borderWidth: 5
    },
    title:{
        fontWeight: "bold",
        fontSize: 45,
        alignSelf: "center",
        textAlign: "center",
    },
    hireBTN:{
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "purple",        
        flexDirection: 'row',
        height: 50,        
    },
    hireText:{
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
    },
});

export default RosterScreen;