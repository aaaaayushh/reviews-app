import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   //method1
  //   // navigation.navigate("ReviewDetails");
  //   //method2
  //   //more explicit method with same function
  //   navigation.push("ReviewDetails");
  // };
  const [modalOpen, setModalOpen] = useState(false);
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
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.textHeading}>Home Screen</Text> */}
      {/* <Button title="go to review" onPress={pressHandler} /> */}
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            //send data to reviewdetails page
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.textHeading}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
