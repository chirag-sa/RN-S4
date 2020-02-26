import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./Component/Login";
import AddFeedComponent from "./Component/AddFeedComponent";
import FeedList from "./Component/FeedList";
import FoodDetail from "./Component/FeedDetail";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const Tab = createBottomTabNavigator({
  Feed: FeedList,
  Add: AddFeedComponent
});
const Stack = createStackNavigator({
  Feed: Tab,
  Detail: FoodDetail
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginComponent,
      Detail: Stack
    },
    {
      initialRouteName: "Login"
    }
  )
);
