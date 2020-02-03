import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

export default class LoadingIndicator extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            height: "110%",
            width: "100%",
            flex: 1
          }}
        >
          <ActivityIndicator
            color="red"
            size="large"
            style={{ flex: 1 }}
          ></ActivityIndicator>
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}
