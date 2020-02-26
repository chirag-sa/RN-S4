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

export default class FoodDetail extends React.Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    var data = this.props.navigation.state["params"];
    return (
      <View style={styles.container}>
        <Text>{data.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(245,245,245,1)"
  }
});
