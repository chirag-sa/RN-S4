import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Image
} from "react-native";
import LoadingIndicator from "./LoadingComponent";
import { Card } from "react-native-shadow-cards";

export default class FeedList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      recipeList: [],
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s"
    };
  }
  componentDidMount() {
    return this.getRecipes();
  }
  getRecipes = () => {
    console.log("called");

    this.setState({ isLoading: true });
    fetch("http://35.160.197.175:3006/api/v1/recipe/cooking-list", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.state.token
      }
    })
      .then(result => {
        // this.setState({ isLoading: false });
        return result.json();
      })
      .then(response => {
        console.log(response);

        this.setState({ isLoading: false });
        this.setState({
          recipeList: response
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingIndicator isLoading={this.state.isLoading} />
        <View>
          <FlatList
            data={this.state.recipeList}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>
                  <Card style={{ padding: 10, margin: 10 }}>
                    <Text style={[styles.heading, styles.normalText]}>
                      {item.name}
                    </Text>
                    <Text style={styles.normalText}>
                      Chef: {item.firstName} {item.lastName}
                    </Text>
                    <Image
                      style={{ width: "100%", height: 200 }}
                      source={{
                        uri: item.photo
                      }}
                    />
                    <Text style={{ marginTop: 10 }}>
                      Time: {item.preparationTime}
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                      Level: {item.complexity}
                    </Text>
                  </Card>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
            key={(item, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "pink"
  },
  heading: {
    backgroundColor: "#B98EA7",
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  normalText: {
    padding: 5
  }
});
