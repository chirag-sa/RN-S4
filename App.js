import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./Component/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
