import React from "react";
import { View, StyleSheet, Image, StatusBar, ScrollView } from "react-native";

import colors from "../config/colors";
import convertToArray from "../functions/convertToArray";
import NewsGallery from "../components/NewsGallery";
import Text from "../components/Text";
import TextInterpreter from "../components/TextInterpreter";

const NewsDetailsScreen = ({ route: { params } }) => {
  const description = convertToArray(params.text).map((item) => (
    <TextInterpreter
      key={item.key}
      type={item.type}
      innerText={item.innerText}
    />
  ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.mainPhoto} source={{ uri: params.imagePath }} />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.description}>{description}</Text>
        <NewsGallery images={params.gallery} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 1,
  },
  mainPhoto: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    color: colors.blue,
    paddingVertical: 10,
    fontFamily: "Montserrat_700Bold",
    textTransform: "uppercase",
    fontSize: 25,
  },
  description: {
    textAlign: "justify",
    padding: 15,
    color: "#333",
    borderRadius: 15,
    marginHorizontal: 5,
  },
});

export default NewsDetailsScreen;
