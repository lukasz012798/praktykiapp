import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import convertToArray from "../functions/convertToArray";
import Text from "../components/Text";
import TextInterpreter from "../components/TextInterpreter";

const NewsCard = ({ image, item, item: { date } }) => {
  const d = new Date(date.length === 13 ? +date : date);

  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  const parsePLDate = (d) => {
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const content = convertToArray(item.text).map((item) => (
    <TextInterpreter
      key={item.key}
      type={item.type}
      innerText={item.innerText}
    />
  ));

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={image} resizeMode={"cover"} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.text} numberOfLines={2}>
          {content}
        </Text>
        <Text style={styles.date}>{parsePLDate(d)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // height: 300,
    width: "100%",
  },
  thumbnail: {
    height: 225,
    width: "100%",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.blue,
    fontSize: 17,
    alignSelf: "center",
  },
  text: {
    textAlign: "justify",
    paddingTop: 5,
    paddingBottom: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  date: {
    alignSelf: "flex-end",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default NewsCard;
