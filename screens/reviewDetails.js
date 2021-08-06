import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { images, globalStyles } from "../styles/global";
import Card from "../shared/card";
export default function Review({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  //   //or navigation.pop();
  // };
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      {/* <Text>Review Screen</Text> */}
      {/* <Button title="back to home" onPress={pressHandler} /> */}
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
