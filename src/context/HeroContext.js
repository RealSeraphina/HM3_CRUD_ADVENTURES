import React, {useReducer} from "react";
import createDataContext from "./createDataContext";


const heroReducer = (state, action) => {
    switch(action.type){
        case 'hire_hero':
            return [...state, { 
                    id: Math.floor(Math.random()*9999), 
                    name: action.payload.name,
                    level: Math.floor(Math.random()*100),
                    power: Math.floor(Math.random()*100),
                    maxHealth: Math.floor(Math.random()*9999),
                    currentHealth: 5,
                    gold: Math.floor(Math.random()*100)
                    // id: Math.floor(Math.random()*9999), 
                    // name: "bob" + Math.floor(Math.random()*9999),
                    // level: Math.floor(Math.random()*100),
                    // power: Math.floor(Math.random()*100),
                    // maxHealth: Math.floor(Math.random()*9999),
                    // currentHealth: 5,
                    // gold: Math.floor(Math.random()*100)
                }]
        case 'level_hero':
            return state.map((hero) => {
                if(hero.id === action.payload.id){
                    return[...state, {
                        level: hero.level + 1,
                        gold: hero.gold - action.payload.gold
                    }]
                }
                else{
                    return hero;
                }
            })
        default:
            return state;
    }
}

const hireHero = (dispatch) => {
    let newHero = generateHero();
    console.log(newHero);
    return (id, name, level, power, maxHealth, currentHealth, gold) => {
        dispatch({type: 'hire_hero', payload:{name: newHero.name, level: 1, power: hero.power, maxHealth: hero.maxHealth, currentHealth: hero.maxHealth, gold: 100}})
    }
}

const generateHero = () => {
    let hero = {};
    hero.level  = 1;
    let fNames = ["Sera", "Erin", "Tori"];
    let lNames = ["Tempest", "Ursa", "Wolf"];
    hero.name = fNames[Math.floor(Math.random()*fNames.length)] + " " +
        lNames[Math.floor(Math.random()* lNames.length)];
    hero.gold = 100;
    hero.power = Math.floor(Math.random()* 5) + 1;
    hero.maxHealth = Math.floor(Math.random()* 7) + 3;
    return hero;
}

const levelHero = (dispatch) => {
    return (id, gold) => {
        dispatch({type: 'level_hero', payload:{
            id: id,
            gold: gold
        }})
    }
}


export const {Context, Provider} = createDataContext(heroReducer, 
                                    {hireHero: hireHero, levelHero: levelHero}, 
                                    [{id: 1, name: "JoCat", level: 1, power: 10, maxHealth: 100, currentHealth: 100, gold: 5000}]
                                    );

