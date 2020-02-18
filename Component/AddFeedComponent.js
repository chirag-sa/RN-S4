import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class AddFeedComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      preparationTime: "",
      serve: 0,
      complexity: "",
      youtube: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Reciepe Name"
          style={[styles.textInput]}
          value={this.state.name}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    padding: 12,
    borderRadius: 30,
    borderColor: "gray",
    fontWeight: "bold",
    width: "80%",
    height: 50,
    backgroundColor: "grey"
  }
});
