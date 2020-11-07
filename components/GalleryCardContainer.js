import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const GalleryCardContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: "100%",
    height: 200,
    marginBottom: 5,
  },
});

export default GalleryCardContainer;
