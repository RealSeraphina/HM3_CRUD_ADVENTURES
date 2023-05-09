import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, ScrollView } from "react-native";

import { Context } from "../context/HeroContext";
import NavBar from "../componets/NavBar";



const AdventureScreen = (props) => {
    const { state, updateHero } = useContext(Context);
    const { name, challengeLevel } = newAdventure();
    return <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.challengeLV}>Challenge Level: {challengeLevel}</Text>
            <FlatList
            data={state}
            keyExtractor={(heros) => {return heros.name}}
            renderItem={({item}) => {
                return  <TouchableOpacity onPress={ () => {
                    heroUpdate = engageAdventure(item.id,item.power,item.currentHealth,item.gold,challengeLevel)
                     updateHero(heroUpdate);
                    }}>
                    <View style = {styles.row}>                    
                        <Text style={styles.hero}>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} Gold: {item.gold}</Text>
                    </View>
                </TouchableOpacity>
            }}
        />
        </View>
        <NavBar />
    </View>
    
}

const engageAdventure = (heroID, heroPower, heroHealth, heroGold, challengeLV) => {
    //console.log("engage adventure");
    //console.log("Hero power: " + heroPower);
    //console.log("challengeLV: " + challengeLV);
    let heroUpdate = {};
    if(heroPower >= challengeLV){
        //console.log(heroID + " wins ");
        heroUpdate.power = heroPower + Math.floor(Math.random()*10) + challengeLV;
        heroUpdate.gold = heroGold +  Math.floor(Math.random()*100) + challengeLV;
        heroUpdate.health = heroHealth - Math.floor(Math.random()*2);
        heroUpdate.status = true; 
        heroUpdate.id = heroID;

        return heroUpdate;
    }
    else{
        //console.log(heroID + " loses ")
        heroUpdate.power = heroPower;
        heroUpdate.gold = heroGold +  Math.floor(Math.random()*5);
        heroUpdate.health = heroHealth - Math.floor(Math.random()*10);
        heroUpdate.status = false; 
        heroUpdate.id = heroID;
        return heroUpdate;
    }
}

const newAdventure = () => {
    let adventure = {};

    const adjectives = ["attractive","bald","beautiful","chubby","clean","dazzling","drab","elegant","fancy","fit","flabby","glamorous","gorgeous","handsome","long","magnificent","muscular","plain","plump","quaint","scruffy","shapely","short","skinny","stocky","ugly","unkempt","unsightly","	alive","better","careful","clever","dead","easy","famous","gifted","hallowed","helpful","important","inexpensive","mealy","mushy","odd","poor","powerful","rich","shy","tender","unimportant","uninterested","vast","wrong","aggressive","agreeable","ambitious","brave","calm","delightful","eager","faithful","gentle","happy","jolly","kind","lively","nice","obedient","polite","proud","silly","thankful","victorious","witty","wonderful","zealous","	angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","pitiful","repulsive","scary","thoughtless","uptight","worried","big","colossal","fat","gigantic","great","huge","immense","large","little","mammoth","massive","microscopic","miniature","petite","puny","scrawny","short","small","tall","teeny","tiny"]
    const locations  = ["Observation tower","Farmhouse","Shop","High-rise building","Chicken coop","Barracks","University","Cathedral","Monastery","Town hall","Skyscraper","Stadium","Pyramid","Prison","Ice station","Eiffel tower","Forester's house","Lawyer's chambers","Hardware store","Brothel","Office","Factory (assembly line)","Hairdresser","open-plan office","Harbor","Internet cafe","Cantine","Orthodontist","Kindergarten","Market","open air market","Massage pactice","trade fair stand","Gym","Nail salon","Butcher's shop","School","Tanning salon","Tax advisor","Supermarket","Laundromat","Ad agency","Sausage stand","Dentist","wig store","Glacier","Forest","Beach","Meadow","Desert","Park","Rainforest","Oasis","Savannah","Waterfall","Library","School","Cinema","Theatre","Museum ","Heaven","Hell","Paradise","Spaceship","Space station"]
    const qualifiers = ["doom", "joy", "misery", "nothingness", "adventure", "kittens", "slimes", "bears", "riches", "rock and roll", "studies", "awesomeness", "confusion", "answers", "questions", "mystery", "mysteries", "neve-ending laughter", "eternal darkness", "ruling","sentencing","verdict","judgement","judgment","decision","finding","holding","declaration","punishment","injunction","decree","opinion","pronouncement","inquest","order","determination","deliverance","penalty","resolution","treasures","edicts","conclusion","authority","dictum","discipline","arbitrament", "Golems", "oni", "Orgers", "Vampires", "regret"]

    adventure.name = "THE " + adjectives[Math.floor(Math.random()*adjectives.length)].toUpperCase() + " " +
        locations[Math.floor(Math.random()*locations.length)].toUpperCase() + " OF " +
        qualifiers[Math.floor(Math.random()*qualifiers.length)].toUpperCase()

    adventure.challengeLevel = Math.floor(Math.random()*10)+1;
    //console.log("Adventure");
    return adventure;
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
    title:{
        fontWeight: "bold",
        fontSize: 45,
        alignSelf: "center",
        textAlign: "center",
        borderColor: "black",
        borderWidth: 5,
        alignSelf: "stretch",
        padding: 4,
        
    },
    challengeLV:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
        padding: 5,
    },
})

export default AdventureScreen;