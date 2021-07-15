import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Review from "../screens/reviewDetails";

//stackNavigator gives a header, and a back button by default
//object to pass to createStackNavigator
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      //   headerStyle: { backgroundColor: "#eee" },
    },
  },
  ReviewDetails: {
    screen: Review,
    navigationOptions: {
      title: "Review Details",
      //   headerStyle: { backgroundColor: "#eee" },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 120 },
  },
});

//appcontainer returns a component that can be rendered with app.js and contains all the info about the navigation stack
// export default createAppContainer(HomeStack);
export default HomeStack;
