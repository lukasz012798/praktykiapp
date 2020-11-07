import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, StatusBar as StatusBarNative } from "react-native";

const Screen = ({ children, style }) => {
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
  },
});

export default Screen;
