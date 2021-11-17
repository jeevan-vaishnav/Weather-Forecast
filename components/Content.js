import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./parts/Card";

export default class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          img={require("../assets/waether/rainy.png")}
          bgColor="orange"
          color1="orange"
          color2="pink"
          style={{ borderTopLeftRadius: 70 }}
        />

        <Card
          img={require("../assets/waether/setting.png")}
          bgColor="purple"
          color1="hotpink"
          color2="purple"
          style={{ borderTopLeftRadius: 70 }}
        />

        <Card
          img={require("../assets/waether/moon.png")}
          color1="lightblue"
          color2="skyblue"
          bgColor="skyblue"
          style={{ borderBottomRightRadius: 70 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },
});
