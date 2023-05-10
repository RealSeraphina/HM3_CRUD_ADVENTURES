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
                    props.navigation.navigate("Hero", {id : item.id, heroUpdate});
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
        heroUpdate.power = heroPower;// + Math.floor(Math.random()*10) + challengeLV;
        heroUpdate.deltaGold = Math.floor(Math.random()*100) + challengeLV
        heroUpdate.gold = heroGold +  heroUpdate.deltaGold;
        heroUpdate.deltaHealth =  Math.floor(Math.random()*2);
        heroUpdate.health = heroHealth - heroUpdate.deltaHealth;
        heroUpdate.status = true; 
        heroUpdate.id = heroID;

        return heroUpdate;
    }
    else{
        //console.log(heroID + " loses ")
        heroUpdate.power = heroPower;
        heroUpdate.deltaGold = Math.floor(Math.random()*5)
        heroUpdate.gold = heroGold + heroUpdate.deltaGold;
        heroUpdate.deltaHealth = Math.round(heroHealth/2) - 1; 
        heroUpdate.health = heroUpdate.deltaHealth;
        heroUpdate.status = false; 
        heroUpdate.id = heroID;
        return heroUpdate;
    }
}

const newAdventure = () => {
    let adventure = {};
    // I generated most of these items using Google Bard
    const adjectives = ["attractive","bald","beautiful","chubby","clean","dazzling","drab","elegant","fancy","fit","flabby","glamorous","gorgeous","handsome","long","magnificent","muscular","plain","plump","quaint","scruffy","shapely","short","skinny","stocky","ugly","unkempt","unsightly","	alive","better","careful","clever","dead","easy","famous","gifted","hallowed","helpful","important","inexpensive","mealy","mushy","odd","poor","powerful","rich","shy","tender","unimportant","uninterested","vast","wrong","aggressive","agreeable","ambitious","brave","calm","delightful","eager","faithful","gentle","happy","jolly","kind","lively","nice","obedient","polite","proud","silly","thankful","victorious","witty","wonderful","zealous","	angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","pitiful","repulsive","scary","thoughtless","uptight","worried","big","colossal","fat","gigantic","great","huge","immense","large","little","mammoth","massive","microscopic","miniature","petite","puny","scrawny","short","small","tall","teeny","tiny", "ancient", "awe-inspiring", "beautiful", "benevolent", "chaotic", "dangerous", "dark", "delightful", "dreadful", "enchanted", "evil", "fantastic", "foreboding", "frightening", "gloomy", "gracious", "haunting", "hopeful", "magical", "mysterious", "noble", "ominous", "powerful", "proud", "resplendent", "sacred", "scary", "sinister", "splendid", "strong", "terrifying", "unforgiving", "unholy", "whimsical", "wonderful", "wicked", "wise", "wondrous", "wrathful", "abyssal", "angelic", "barbaric", "beguiling", "bleak", "burnished", "cataclysmic", "celestial", "chromatic", "crystalline", "dazzling", "eldritch", "ephemeral", "ethereal", "fertile", "forbidding", "frigid", "ghastly", "glacial", "glimmering", "glorious", "grotesque", "haughty", "hideous", "illustrious", "impenetrable", "incandescent", "inscrutable", "intangible", "irresistible", "jagged", "kaleidoscopic", "luminous", "magical", "majestic", "mysterious", "nightmarish", "ominous", "opalescent", "ornate", "pristine", "quixotic", "resplendent", "rustic", "shimmering", "sinister", "spectral", "splendid", "stark", "swarthy", "tattered", "treacherous", "unfathomable", "unforgiving", "untamed", "unearthly", "unfathomable", "unholy", "unknowable", "unnatural", "untamed", "uncanny", "vicious", "whimsical", "wondrous", "wrathful"]
    const locations  = ["Observation tower","Farmhouse","Shop","High-rise building","Chicken coop","Barracks","University","Cathedral","Monastery","Town hall","Skyscraper","Stadium","Pyramid","Prison","Ice station","Eiffel tower","Forester's house","Lawyer's chambers","Hardware store","Brothel","Office","Factory (assembly line)","Hairdresser","open-plan office","Harbor","Internet cafe","Cantine","Orthodontist","Kindergarten","Market","open air market","Massage pactice","trade fair stand","Gym","Nail salon","Butcher's shop","School","Tanning salon","Tax advisor","Supermarket","Laundromat","Ad agency","Sausage stand","Dentist","wig store","Glacier","Forest","Beach","Meadow","Desert","Park","Rainforest","Oasis","Savannah","Waterfall","Library","School","Cinema","Theatre","Museum ","Heaven","Hell","Paradise","Spaceship","Space station","capital city", "port city", "mining town", "farming village", "wizard's tower", "dragon's lair", "haunted castle", "dwarven city", "elven forest", "goblin caves", "market town", "crossroads town", "river town", "hilltop town", "desert town", "snow-covered town", "seaside town", "forest town", "mountain town", "haunted town", "farming village", "fishing village", "mining village", "logging village", "shepherding village", "nomadic village", "desert village", "snow-covered village", "seaside village", "forest village", "mountains", "forests", "deserts", "snow-covered lands", "seas", "oceans", "rivers", "lakes", "swamps", "caves", "magical forest", "enchanted castle", "dragon's hoard", "lost city", "underdark", "astral plane", "dream realm", "shadowfell", "far realm", "nine hells"]
    // I couldn't think of a good term for qualifiers to generate what I was looking for so most of these entries are creatures 
    const qualifiers = ["doom", "joy", "misery", "nothingness", "adventure", "kittens", "slimes", "bears", "riches", "rock and roll", "studies", "awesomeness", "confusion", "answers", "questions", "mystery", "mysteries", "neve-ending laughter", "eternal darkness", "ruling","sentencing","verdict","judgement","judgment","decision","finding","holding","declaration","punishment","injunction","decree","opinion","pronouncement","inquest","order","determination","deliverance","penalty","resolution","treasures","edicts","conclusion","authority","dictum","discipline","arbitrament", "Golems", "oni", "Orgers", "Vampires", "regret","Aberrations","Aboleths","Beholders","Brainstealerdragons","Flumphs","Gibberingmouths","Grells","Illithids","Mindflayers","Neothelids","Sahuagin","Slaadi","Starspawns","Umberhulks","Xorns","Animals","Aarakocras","Ankylosauruses","Armadillos","Axebeaks","Badgers","Basilisks","Bats","Bears","Beholders","Blue dragons","Boars","Brown bears","Bulettes","Camels","Carnivorous plants","Cats","Centaurs","Chimpanzees","Cockatrices","Crocodiles","Deer","Dragons","Eagles","Elephants","Elks","Eels","Ermines","Foxes","Giants","Giantapes","Gianteagles","Giantfrogs","Giantspiders","Gianttoads","Gianttortoises","Giantwasps","Goats","Gorillas","Griffins","Hippopotamuses","Horses","Hyenas","Ibexes","Jackals","Jaguars","Jellyfish","Kangaroos","Lions","Lizards","Mammoths","Manticores","Monkeys","Mosquitoes","Mules","Octopuses","Owls","Oxen","Panthers","Parrots","Pegasuses","Platypuses","Polarbears","Ponies","Porpoises","Pythons","Rabbits","Raccoons","Rats","Ravens","Rhinoceroses","Riverhorses","Scorpions","Sealions","Seaserpents","Sharks","Sheep","Snakes","Spiders","Squirrels","Stags","Tigers","Toads","Tortoises","Tunas","Unicorns","Vampires","Vultures","Walruses","Warhorses","Wasps","Weasels","Whales","Wolves","Wolverines","Zebras","Demons","Balor","Cambions","Dretches","Erinyes","Goristros","Imps","Mariliths","Mephistopheles","Pitfiends","Succubi","Tanar'ri","Vrocks","Yagnoloths","Dragons","Black dragons","Blue dragons","Brass dragons","Bronze dragons","Copper dragons","Crystal dragons","Gold dragons","Green dragons","Red dragons","Silver dragons","White dragons","Airel ementals","Earth elementals","Fire elementals","Water elementals","Fey","Dryads","Elves","Fairies","Gnomes","Goblins","Halflings","Pixies","Satyrs","Sprites","Trolls","Giants","Cloudgiants","Firegiants","Frostgiants","Hillgiants","Stonegiants","Dwarves","Elves","Goblins","Kobolds"]

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