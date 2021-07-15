import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Review({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  //   //or navigation.pop();
  // };
  return (
    <View style={globalStyles.container}>
      {/* <Text>Review Screen</Text> */}
      {/* <Button title="back to home" onPress={pressHandler} /> */}
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
