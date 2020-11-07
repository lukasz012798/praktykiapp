import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import LinkButton from "../components/LinkButton";
import Text from "./Text";

const ResultCard = ({ item }) => {
  return (
    <LinkButton url={item.urlPath}>
      <View style={styles.container}>
        <View style={styles.team}>
          <Image style={styles.teamArms} source={{ uri: item.firstArmsPath }} />
          <Text style={styles.teamName}>{item.firstName}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{item.result}</Text>
          <Image
            style={styles.logoImage}
            source={{ uri: item.logoPath }}
            resizeMethod={"scale"}
            resizeMode="contain"
          />
        </View>
        <View style={styles.team}>
          <Image
            style={styles.teamArms}
            source={{ uri: item.secondArmsPath }}
          />
          <Text style={styles.teamName}>{item.secondName}</Text>
        </View>
      </View>
    </LinkButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
  },
  logoImage: {
    height: "50%",
    width: "100%",
  },
  result: {
    flexGrow: 1,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: colors.blue,
  },
  resultText: {
    color: colors.blue,
    // fontFamily: "Montserrat_700Bold",
    fontFamily: "Anton_400Regular",
    fontSize: 30,
  },
  team: {
    alignItems: "center",
    width: 100,
    paddingVertical: 15,
  },
  teamArms: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  teamName: {
    textTransform: "uppercase",
    textAlign: "center",
    color: colors.blue,
    // fontFamily: "Montserrat_700Bold",
    fontFamily: "Anton_400Regular",
    // letterSpacing: 2,
    paddingTop: 7,
  },
});

export default ResultCard;
