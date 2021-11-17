import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default App;
