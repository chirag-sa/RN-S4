import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./Component/Login";
import FeedList from "./Component/FeedList";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginComponent /> */}
      <FeedList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
