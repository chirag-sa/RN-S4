import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./Component/Login";
import FeedList from "./Component/FeedList";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginComponent,
      Feeds: FeedList
    },
    {
      initialRouteName: "Login"
    }
  )
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
