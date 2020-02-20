import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Picker,
  Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class AddFeedComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      preparationTime: "",
      serve: "0",
      complexity: "",
      youtube: "",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s"
    };
  }
  onSubmit = () => {
    console.log(this.state);

    fetch("http://35.160.197.175:3006/api/v1/recipe/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + this.state.token
      },
      body: JSON.stringify({
        name: this.state.name,
        preparationTime: this.state.preparationTime,
        serves: parseInt(this.state.serve),
        complexity: this.state.complexity,
        metaTags: [],
        ytUrl: this.state.youtube
      })
    })
      .then(result => {
        // this.setState({ isLoading: false });

        return result.json();
      })
      .then(response => {
        this.props.navigation.navigate("Feed");
        if (response) {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      // <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/add-reciepe.jpg")}
          style={styles.container2}
        >
          <View style={{ flex: "0.6", width: "100%" }}>
            <TextInput
              placeholder="Enter Reciepe Name"
              style={[styles.textInput]}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              placeholder="Enter Preparation Time"
              style={[styles.textInput]}
              value={this.state.preparationTime}
              onChangeText={preparationTime =>
                this.setState({ preparationTime })
              }
            />
            <TextInput
              placeholder="Enter No. of Serves"
              keyboardType="number-pad"
              style={[styles.textInput]}
              value={this.state.serve}
              onChangeText={serve => this.setState({ serve })}
            />
            <TextInput
              placeholder="Enter Complexity"
              style={[styles.textInput]}
              value={this.state.complexity}
              onChangeText={complexity => this.setState({ complexity })}
            />
            <TextInput
              placeholder="Enter Youtube Url"
              style={[styles.textInput]}
              value={this.state.youtube}
              keyboardType="url"
              onChangeText={youtube => this.setState({ youtube })}
            />
            <TouchableOpacity
              style={[styles.textInput, styles.touchableStyle]}
              onPress={this.onSubmit}
            >
              <Text style={styles.loginButton}>Add Reciepe</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  textInput: {
    marginTop: 20,
    padding: 10,
    borderRadius: 30,
    borderColor: "gray",
    fontWeight: "bold",
    width: "100%",
    height: 50,
    backgroundColor: "white"
  },
  pickerStyle: {
    marginTop: 20,
    padding: 10,
    height: 80,
    width: "40%",
    backgroundColor: "white",
    color: "black"
  },
  touchableStyle: {
    backgroundColor: "#900C3F",
    height: 50,
    borderRadius: 10
  },
  loginButton: {
    width: "100%",
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  }
});
