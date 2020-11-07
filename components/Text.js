import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ children, numberOfLines, style }) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat_400Regular",
  },
});

export default AppText;
