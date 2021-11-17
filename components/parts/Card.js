import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Platform } from "react-native";

export default class extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: this.props.bgColor,
          marginTop: 10,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            ...styles.bgcard,
            backgroundColor: "orange",
            justifyContent: "flex-start",
            backgroundColor: this.props.color1,
            ...this.props.style,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Text style={styles.text}>18:00</Text>
          <Image source={this.props.img} style={styles.img} />
        </View>

        <View
          style={{
            ...styles.bgcard,
            backgroundColor: "hotpink",
            elevation: -1,
            zIndex: -1,
            justifyContent: "flex-end",
            backgroundColor: this.props.color2,
            ...this.props.style,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={styles.text}>12</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgcard: {
    ...Platform.select({
      ios: {
        width: 100,
      },
      android: {
        width: 100,
        height: 100,
      },
    }),

    alignItems: "center",
  },

  img: {
    width: 50,
    height: 50,
    alignSelf: "center",
    zIndex: -99,
    ...Platform.select({
      ios: {
        marginTop: 30,
      },
      android: {
        marginTop: 30,
      },
    }),
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "900",
  },
});
