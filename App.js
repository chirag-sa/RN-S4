import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./Component/Login";
import AddFeedComponent from "./Component/AddFeedComponent";
import FeedList from "./Component/FeedList";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const Tab = createBottomTabNavigator({
  Feed: FeedList,
  Add: AddFeedComponent
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginComponent,
      Tab: Tab
    },
    {
      initialRouteName: "Login"
    }
  )
);
