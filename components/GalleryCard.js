import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

import Text from "./Text";

const GalleryCard = ({ item }) => {
  const styles = StyleSheet.create({
    image: {
      height: "100%",
      width: "100%",
    },
    text: {
      position: "absolute",
      zIndex: 2,
      fontFamily: "Anton_400Regular",
      textTransform: "uppercase",
      color: item.url === null ? colors.blue : "whitesmoke",
      backgroundColor: item.url === null ? "whitesmoke" : colors.blue,
      paddingHorizontal: 5,
      bottom: 10,
      left: "2%",
      maxWidth: "96%",
    },
  });
  return (
    <>
      <Text style={styles.text}>{item.title}</Text>
      <Image style={styles.image} source={{ uri: item.images[0] }} />
    </>
  );
};

export default GalleryCard;
