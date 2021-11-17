import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Additional Info</Text>
        <View style={styles.contianer}>
          <Text style={styles.mainInfo}>
            Wind: <Text style={styles.ainfo}>12m/h</Text>
          </Text>
          <Text style={styles.mainInfo}>
            Humidity: <Text style={styles.ainfo}>55</Text>
          </Text>
        </View>
        <View style={styles.contianer}>
          <Text style={styles.mainInfo}>
            Visibility: <Text style={styles.ainfo}>25kn</Text>
          </Text>
          <Text style={styles.mainInfo}>
            UV: <Text style={styles.ainfo}>1</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    marginRight: 50,
  },
  heading: {
    fontSize: 22,
    fontFamily: "Montserrat",
    textAlign: "left",
    marginVertical: 15,
    fontWeight: "900",
  },
  ainfo: {
    fontWeight: "900",
  },
  mainInfo: {
    fontWeight: "bold",
    color: "#333",
    padding: 5,
  },
});
