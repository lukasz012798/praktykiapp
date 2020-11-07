import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Text from "../components/Text";

const LoadingScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Ładowanie aplikacji...</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    justifyContent: "center",
  },
  text: {
    color: "whitesmoke",
    fontFamily: "Montserrat_700Bold",
    textTransform: "uppercase",
    fontSize: 50,
    textAlign: "center",
  },
});

export default LoadingScreen;
