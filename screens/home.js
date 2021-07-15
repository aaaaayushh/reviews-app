import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   //method1
  //   // navigation.navigate("ReviewDetails");
  //   //method2
  //   //more explicit method with same function
  //   navigation.push("ReviewDetails");
  // };
  const [reviews, setReviews] = React.useState([
    {
      title: "Zelda,Breath of Fresh Air",
      rating: 4,
      body: "lorem ipsum",
      key: 1,
    },
    { title: "ShinChan", rating: 5, body: "lorem ipsum", key: 2 },
    { title: "Doraemon", rating: 4, body: "lorem ipsum", key: 3 },
  ]);
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.textHeading}>Home Screen</Text> */}
      {/* <Button title="go to review" onPress={pressHandler} /> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            //send data to reviewdetails page
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.textHeading}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
