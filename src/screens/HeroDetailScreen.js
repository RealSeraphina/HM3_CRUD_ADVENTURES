import React, { useContext } from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/HeroContext";

import NavBar from "../componets/NavBar";

const HeroDetailScreen = (props) => {
    const { state, levelHero } = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const heroLevel = props.navigation.getParam("level");
    const heroUpdate = props.navigation.getParam("heroUpdate");
    //console.log(heroUpdate);
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
        <Text>{renderStatus()}</Text>
        <TouchableOpacity style={styles.lvup} onPress={() => {levelHero(heroID)}}>
                <Text style={styles.lvupText}>Level Up For Only {currentHero.level * 10} Gold!</Text>
            </TouchableOpacity>
        <NavBar />
    </View>
}

const renderStatus = () => {
    if(heroUpdate){        
        if(heroUpdate.status){
            //console.log(heroUpdate)
            let success = "Congradulations brave hero! You compleated your adventure gaining a pile of " + heroUpdate.deltaGold + " Gold! Though you faught bravely it looks like you may have taken a hit or two costing " + heroUpdate.deltaHealth + "HP! Take a load off; perhaps grab a Level Up Potion from the bar and I'm sure you'll feel better than ever! We're going to celebrate!" 
            heroUpdate = null;
            return success
        }
        else{
            let failure = "Awe don't get down hero! Sure looks like you're a bit worse for the wear. Oh, yeah they tore you up real good I'd say they hit you for at least " + heroUpdate.deltaHealth + "HP. Hey look at that though! Is you coin purse a bit heavier than usual or is it just me? i'd say you managed to get out with your life and " + heroUpdate.deltaGold + " gold pieces... That's something to celebrate."
            heroUpdate = null;
            return failure;
        }     
    }
    else{
        return "";
    }   

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