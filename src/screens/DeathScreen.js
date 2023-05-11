import React, { useContext }  from "react";
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/HeroContext";

import NavBar from "../componets/NavBar";



const DeathScreen = (props) => {
    const heroName = props.navigation.getParam("name");    
    const eulogy = generateEulogy(heroName);
    return <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.eulogy}>{eulogy}</Text>
            <Text style={styles.crossbones}>☠️</Text>
        </View>
        <NavBar />
    </View>
}

const generateEulogy = (heroName) =>{
    let eulogy = ""
    let eulogyTemplates = ["We gather here today to mourn the loss of a great adventurer. [Name] was a true hero, who fought bravely against evil and always put the needs of others before their own. They were a skilled fighter, a wise leader, and a loyal friend. We will all miss them dearly.",
        "[Name] was born in a small village, but they always dreamed of exploring the world. When they were old enough, they set out on their own, and they soon made a name for themselves as a skilled adventurer. They traveled to far-off lands, met amazing people, and faced many dangers. But through it all, they never gave up their sense of hope and compassion.",
        "[Name] was a true hero, and their legacy will live on. They will always be remembered for their courage, their strength, and their kindness. But most of all, they will be remembered for their bravery.",
        "[Name] was never afraid to stand up for what they believed in, even when it was difficult. They were always willing to fight for the weak and the oppressed, and they never backed down from a challenge. They were a true inspiration to us all, and we will never forget their bravery.",
        "[Name] will be deeply missed by all who knew them. They were a true hero, and their legacy will live on forever.",
    ]
    eulogy = eulogyTemplates[Math.floor(Math.random()* eulogyTemplates.length)];
    eulogy = eulogy.replace("[Name]",heroName);
    return eulogy
}

const styles = StyleSheet.create({
    container:{
        //borderColor: 'red',
        //borderWidth: 3,
        flex: 1
    },
    eulogy:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
    },
    crossbones:{
        fontWeight: "bold",
        fontSize: 100,
        alignSelf: "center",
        textAlign: "center",
    }
})

export default DeathScreen;