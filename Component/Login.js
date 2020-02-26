import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import LoadingIndicator from "./LoadingComponent";

export default class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "jm1@example.com",
      password: "jay@123",
      isLoading: false
    };
  }
  onSubmit = () => {
    console.log(this.state);

    let email = this.state.email;
    let password = this.state.password;

    this.setState({ isLoading: true });

    fetch("http://35.160.197.175:3006/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(result => {
        // this.setState({ isLoading: false });
        if (result.status === 200) {
          return result.json();
        } else {
          alert("please provide valid credentials");
        }
      })
      .then(response => {
        this.setState({ isLoading: false });

        this.props.navigation.navigate("Detail");
        if (response) {
        }
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.textStyle}>Habari</Text>
        </View>
        <View style={styles.bodyView}>
          <LoadingIndicator isLoading={this.state.isLoading} />
          <TextInput
            placeholder="Please enter email"
            keyboardType="email-address"
            style={[styles.textInput, styles.emailInput]}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          ></TextInput>
          <TextInput
            placeholder="Please enter password"
            secureTextEntry={true}
            style={styles.textInput}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          ></TextInput>

          <TouchableOpacity
            style={styles.touchableStyle}
            onPress={this.onSubmit}
          >
            <Text style={styles.loginButton}>Login here</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerView}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    flex: 0.2,

    alignItems: "center",
    justifyContent: "center"
  },
  bodyView: {
    flex: 0.4,

    alignItems: "center",
    justifyContent: "center"
  },
  footerView: {
    flex: 0.4,

    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 50,
    color: "white",
    backgroundColor: "orange"
  },
  textInput: {
    padding: 12,
    borderRadius: 30,
    borderColor: "gray",
    fontWeight: "bold",
    width: "80%",
    height: 50,
    backgroundColor: "grey"
  },
  emailInput: {
    bottom: 20
  },
  touchableStyle: {
    top: 20,
    backgroundColor: "black",
    width: "80%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});
