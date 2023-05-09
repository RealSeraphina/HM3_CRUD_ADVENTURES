import React, {useReducer} from "react";
import createDataContext from "./createDataContext";


const heroReducer = (state, action) => {
    switch(action.type){
        case 'hire_hero':
            return [...state, { 
                    id: Math.floor(Math.random()*9999), 
                    name: action.payload.name,
                    level: action.payload.level,
                    power: action.payload.power,
                    maxHealth: action.payload.maxHealth,
                    currentHealth: action.payload.currentHealth,
                    gold: action.payload.gold
                }]
        case 'level_hero':
            //console.log('level_hero');
            return state.map((hero) => {
                //console.log(hero.id);
                //console.log(action.payload.id);
                if(hero.id === action.payload.id){
                    //console.log(hero.name);
                    if(hero.gold - (hero.level * 10) >= 0){
                        hero.level++ ;
                        hero.maxHealth = hero.maxHealth +  Math.floor(Math.random()* 7) + 3;
                        hero.currentHealth = hero.maxHealth;
                        hero.power = hero.power + Math.floor(Math.random()* 5) + 1;
                        hero.gold = hero.gold - (hero.level * 10);
                    }
                    
                    return hero;
                }
                else{
                    return hero;
                }
            })
        default:
            return state;
    }
}

const levelHero = (dispatch) => {
    //console.log("Level Hero");
    return (id) => {
        dispatch({type: 'level_hero', payload:{id: id}})
    }
}

const tst = () => {
    console.log("TEST");
}

const hireHero = (dispatch) => {
    let newHero = generateHero();
    //console.log(newHero);
    return () => {
        dispatch({type: 'hire_hero', payload:{name: newHero.name, level: newHero.level, power: newHero.power, maxHealth: newHero.maxHealth, currentHealth: newHero.maxHealth, gold: newHero.gold}})
    }
}

const generateHero = () => {
    let hero = {};
    hero.level  = 1;
    let fNames = ["Sera", "Erin", "Tori","Akibrus","Angun","Balrus","Bulruk","Caldor","Dagen","Darvyn","Delvin","Dracyian","Dray","Eldar","Engar","Fabien","Farkas","Galdor","Igor","Jai-Blynn","Klayden","Laimus","Malfas","Norok","Orion","Pindious","Quintus","Rammir","Remus","Rorik","Sabir ","Séverin","Sirius","Soril","Sulfu","Syfas","Viktas","Vyn","Wilkass","Yagul","Zakkas","Zarek","Zorion","	Aleera","Alva","Amara","Anya","Asralyn","Azura","Breya","Brina","Caelia","Ciscra","Dezaral","Dorath","Drusila","Elda","Esmeralla","Freya","Gelda","Hadena","Kyla","Kyra","Lavinia","Lunarex","Lyra","Mireille","Nyssa","Olwyn","Ophelia","Peregrine","Reyda","Sarielle","Shikta","Sybella","Syfyn","Thalia","Turilla","Vasha","Vixen","Yvanna","Zaria","Zeniya","	Alea","Azariah","Bellas","Bonna","Chandrelle","Ciradyl","Daealla","Doreah ","Elora","Estelar","Faelyn","Foxfire","Gaylia","Gylledha","Haela","Ilbryn","Ilyrana","Josidiah","Keara","Lymseia ","Merlara","Narbeth","Nym","Oribel","Phyrra","Quamara","Rennyn","Rhenalyrr","Saeya","Sheedra","Taena","Talila","Tanulia","Uldreiyn","Vaella","Vesryn","Wistari","Ylyndar","Yrlissa","Zhuirentel ","Akkar","Axil","Belstram","Cluym","Corym","Daemeon","Darcassan","Darfin","Eldar","Elwin","Eroan","Faelar","Finrod","Gaemon","Haemir","Hastos","Ismzal","Jassin","Jhaan","Kuskyn","Kymil","Lago","Morthil","Myrinn","Neldor ","Nesterin ","Nindr ","Onas ","Orym ","Pharom ","Pyrder ","Rijjat","Silvyr ","Sudryl ","Thingol ","Turgon ","Usunaar ","Vaegon ","Zabbas"];
    let lNames = ["Tempest", "Ursa", "Wolf","Atwater","Agassi","Apatow","Akagawa","Averescu","Arrington","Agrippa","Aiken","Albertson","Alexander","Amado","Anders","Ashsorrow","Humblecut","Ashbluff","Marblemaw","Armas","Akka","Aoki","Aldrich","Apak","Alinsky","Desai","Darby","Draper","Dwyer","Dixon","Danton","Desmith","Ditka","Dominguez","Decker","Dobermann","Dunlop","Dumont","Dandridge","Diamond","Dobra","Dukas","Agnello","Alterio","Bidbury","Botkin","Benoit","Biddercombe","Baldwin","Bennett","Bourland","Boadle","Bender","Best","Bobshaw","Bersa","Belt","Bourn","Barke","Beebe","Banu","Bozzelli","Bogaerts","Blanks","Evert","Eastwood","Elway","Eslinger","Ellerbrock","Eno","Endo","Etter","Ebersol","Everson","Esapa","Ekker","Escobar","Eggleston","Ermine","Erickson","Keller","Kessler","Kobayashi","Klecko","Kicklighter","Kidder","Kershaw","Kaminsky","Kirby","Keene","Kenny","Keogh","Kipps","Kendrick","Kuang","Fairchild","October","Vespertine","Fellowes","Omen","Willow","Gannon","Presto","Windward","Grell","Powers","Wixx","Halliwell","Quellings","Xanthos","Hightower","Quill","Xenides","Idlewind","Rast","Chamillet","Bougaitelet","Hallowswift","Coldsprinter","Winddane","Yarrow","Illfate","Riddle","Yew","Jacaranda","Yearwood","Yellen","Yaeger","Yankovich","Yamaguchi","Yarborough","Youngblood","Yanetta","Yadao","Winchell","Winters","Walsh","Whalen","Watson","Wooster","Woodson","Winthrop","Wall","Sacredpelt","Rapidclaw","Hazerider","Shadegrove","Wight","Webb","Woodard","Wixx","Wong","Whesker","Yale","Yasumoto","Yates","Younger","Yoakum","York","Rigby","Zaba","Surrett","Swiatek","Sloane","Stapleton","Seibert","Stroud","Strode","Stockton","Scardino","Spacek","Spieth","Stitchen","Stiner","Soria","Saxon","Shields","Stelly","Steele","Chanassard","Ronchessac","Boneflare","Monsterbelly","Truthbelly","Sacredmore","Malfoy","Moses","Moody","Morozov","Mason","Metcalf","McGillicutty","Montero","Molinari","Marsh","Moffett","McCabe","Manus","Malenko","Mullinax","Morrissey","Mantooth","Mintz"];
    hero.name = fNames[Math.floor(Math.random()*fNames.length)] + " " +
        lNames[Math.floor(Math.random()* lNames.length)];
    hero.level = 1;
    hero.gold = 100;
    hero.power = Math.floor(Math.random()* 5) + 1;
    hero.maxHealth = Math.floor(Math.random()* 7) + 3;
    return hero;
}




export const {Context, Provider} = createDataContext(heroReducer, 
                                    {hireHero: hireHero, levelHero: levelHero}, 
                                    [{id: 1, name: "JoCat", level: 1, power: 10, maxHealth: 100, currentHealth: 100, gold: 5000}]
                                    );

