import React, { useContext } from "react";
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/HeroContext";

import NavBar from "../componets/NavBar";

const HeroDetailScreen = (props) => {
    const { state, levelHero } = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const heroLevel = props.navigation.getParam("level"); 
    const heroUpdate = props.navigation.getParam("heroUpdate");
    
    
    // console.log(heroUpdate);
    const currentHero = state.find((currentHero) => {
        return heroID === currentHero.id;
    })
    const dasArt = currentHero.art;
    console.log(currentHero);
    return <View style={styles.container}>
        <View style={styles.container}>            
            <Text style={styles.name}>{currentHero.name}</Text>
            <Text style={styles.detail}>Level: {currentHero.level}</Text>
            <Text style={styles.detail}>Health: {currentHero.currentHealth}/{currentHero.maxHealth}</Text>
            <Text style={styles.detail}>Power: {currentHero.power}</Text>
            <Text style={styles.detail}>Gold: {currentHero.gold}</Text>
            <Image style={styles.art} source={dasArt} />
        </View>
        <View style={{backgroundColor: heroUpdate.status === "No Update" ? null : '#708090'}}>
            <Text style={styles.adventureResults}>{renderStatus(heroUpdate)}</Text>
        </View> 
        <TouchableOpacity style={styles.lvup} onPress={() => {levelHero(heroID)}}>
                <Text style={styles.lvupText}>Level Up For Only {currentHero.level * 10} Gold!</Text>
            </TouchableOpacity>
        <NavBar />
    </View>
}

const renderStatus = (heroUpdate) => {
    //console.log("renderStatus");
    if(heroUpdate.status != "No Update"){    
        //console.log("hero has an update!");    
        if(heroUpdate.status){
            //console.log(heroUpdate)
            let barkeepDialogue = [
                "Well, well, well, if it isn't the hero of the hour! Congratulations on a job well done. I've got a free drink waiting for you right over here. Not that it looks like you need it with those [GOLD] pieces of gold you gained. You look like you took quite a beating, though. At least [HP] point of damage I'd say. Are you sure you're okay?",
                "Congradulations brave hero! You compleated your adventure gaining a pile of [GOLD] gold! Though you faught bravely it looks like you may have taken a hit or two costing [HP] HP! Take a load off; perhaps grab a Level Up Potion from the bar and I'm sure you'll feel better than ever! We're going to celebrate!",
                "What's that I hear? You're back from your quest? That one was paying [GOLD] gold! Took a lick or two eh? I see you're down oh at least [HP] HP. ",
                "The hero sits at the table and relaxes. They are exhausted [HP] HP from their journey, but they are also happy to be home with a pocket full of [GOLD] new gold pieces. They know that they are safe and that the kingdom is safe thanks to their efforts. Now is the time for rest and celebration.",
                "I heard you completed your quest! You must have had a tough time, but you made it. You deserve all the [GOLD] gold and glory you have earned. Even if it cost you [HP] HP.",
                "Well done on completing your quest! Nearly without a scratch on ya! That looks like it may only be [HP] HP of damage. What, did a kobold bite ya? Regardless, you are a brave and skilled adventurer. The world is a safer place thanks to your efforts. I suspect you'll be wanting this [GOLD] gold as payment. Spend it well; you earned it!",
                "I am so proud of you for completing your quest! You faced many challenges, but you never gave up. You faught well and only took [HP] HP of damage! You are an inspiration to us all and your treasure hunting skills havent gone unnoticed. What's that, you managed to make it out with [GOLD] gold coins? I know just the bar for you to spend them in!"
            ]
            //let success = "Congradulations brave hero! You compleated your adventure gaining a pile of " + heroUpdate.deltaGold + " Gold! Though you faught bravely it looks like you may have taken a hit or two costing " + heroUpdate.deltaHealth + "HP! Take a load off; perhaps grab a Level Up Potion from the bar and I'm sure you'll feel better than ever! We're going to celebrate!" 
            let success = ""
            success = barkeepDialogue[Math.floor(Math.random()* barkeepDialogue.length)];
            success = success.replace("[HP]",heroUpdate.deltaHealth);
            success = success.replace("[GOLD]",heroUpdate.deltaGold);
            heroUpdate = null;
            return success
        }
        else{
            let barkeepDialogue = [
                "You did your best. That's all anyone can ask. Let's get that [HP] points of damage patched up and here's [GOLD] gold coins for your efforts.",
                "Awe don't get down hero! Sure looks like you're a bit worse for the wear. Oh, yeah they tore you up real good I'd say they hit you for at least [HP] HP. Hey look at that though! Is you coin purse a bit heavier than usual or is it just me? I'd say you managed to get out with your life and [GOLD] gold pieces... That's something to celebrate.",
                "You're a brave and skilled adventurer. Don't let this one defeat you. After all [HP] points of damage? You've had worse! Would [GOLD] coins be enough for a drink?",
                "Failure hurts... In your case it hurts [HP] HP. We're all here for you. We'll help you through this. At least you got out with your life and [GOLD] gold pieces.",
                "I know you're disappointed, but you shouldn't be. You fought bravely and gave it your all. You made a difference with each hit your took and that is a big difference seeing as you took [HP] points of damage! That's all anyone can ask. Well, that and I'm pretty sure [GOLD] gold isn't going to afford a mage to heal you... Maybe go pray and a paladin will take mercy on you.",
                "This is just a setback. You can still achieve your goals. Don't give up on your dreams. You took [HP] points of damage, but there's still air in your lungs and an edge on your blade. Take your [GOLD] gold, buy a drink, and get out there!"
            ]
            //let failure = "Awe don't get down hero! Sure looks like you're a bit worse for the wear. Oh, yeah they tore you up real good I'd say they hit you for at least " + heroUpdate.deltaHealth + "HP. Hey look at that though! Is you coin purse a bit heavier than usual or is it just me? I'd say you managed to get out with your life and " + heroUpdate.deltaGold + " gold pieces... That's something to celebrate."
            let failure = ""
            failure = barkeepDialogue[Math.floor(Math.random()* barkeepDialogue.length)];
            failure = failure.replace("[HP]",heroUpdate.deltaHealth);
            failure = failure.replace("[GOLD]",heroUpdate.deltaGold);
            heroUpdate = null;
            return failure;
        }     
    }
    else{
        return "";
    }   

}

const styles = StyleSheet.create({
    art:{
        height: 200,
        width: 200,
    },
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
    adventureResults:{
        fontSize: 15,
        fontWeight:"bold",
        color: "#FFFAFA",
        padding: 10
    },
})

export default HeroDetailScreen;