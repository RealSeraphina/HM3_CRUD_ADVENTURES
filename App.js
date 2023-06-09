import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import react from "react";

import { Provider } from "./src/context/HeroContext";
import RosterScreen from "./src/screens/RosterScreen";
import HeroDetailScreen from "./src/screens/HeroDetailScreen";
import AdventureScreen from "./src/screens/AdventureScreen";
import DeathScreen from "./src/screens/DeathScreen";


const navigator = createStackNavigator({
  Roster: RosterScreen,
  Hero: HeroDetailScreen,
  Adventure: AdventureScreen,
  Death: DeathScreen,
},
  {
    initialRouteName: "Roster",
    defaultNavigationOptions:{
      title: "HM3_CRUD_ADVENTURES"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
}