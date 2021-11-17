import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text_w}>Weather 31 Forecast</Text>
        <Image source={require("../assets/sun_icon.png")} style={styles.img} />
        <Text style={styles.temp_text}>31,9</Text>
        <Text style={styles.city}>Raipur,India</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text_w: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    fontFamily: "RobotoRegular",
  },
  img: {
    width: 90,
    height: 80,
    alignSelf: "center",
    marginVertical: 10,
  },
  temp_text: {
    fontSize: 48,
    fontWeight: "900",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  city: {
    fontSize: 24,
    color: "#777",
    textAlign: "center",
  },
});
