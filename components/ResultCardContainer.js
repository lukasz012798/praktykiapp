import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, StatusBar as StatusBarNative } from "react-native";

const ResultCardContainer = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "whitesmoke",
    marginBottom: 10,
  },
});

export default ResultCardContainer;
