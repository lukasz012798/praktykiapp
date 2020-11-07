import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  StatusBar,
} from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "./Text";

const Slider = ({ onClose, gallery, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  return (
    <View style={styles.container}>
      <Text style={styles.indexInformation}>{`${currentIndex + 1}/${
        gallery.length
      }`}</Text>
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={{ uri: gallery[currentIndex] }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={styles.arrows}
          onPress={() =>
            currentIndex === 0 ? null : setCurrentIndex(currentIndex - 1)
          }
          underlayColor={currentIndex === 0 ? colors.black : colors.blue}
        >
          <MaterialIcons
            name="navigate-before"
            size={24}
            color={currentIndex === 0 ? colors.black : colors.white}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.closeButton}
          onPress={onClose}
          underlayColor={colors.blue}
        >
          <Text style={styles.closeButtonText}>Zamknij</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.arrows}
          onPress={() =>
            currentIndex === gallery.length - 1
              ? null
              : setCurrentIndex(currentIndex + 1)
          }
          underlayColor={
            currentIndex === gallery.length - 1 ? colors.black : colors.blue
          }
        >
          <MaterialIcons
            name="navigate-next"
            size={24}
            color={
              currentIndex === gallery.length - 1 ? colors.black : colors.white
            }
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrows: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "black",
  },
  image: {
    height: "90%",
    width: "100%",
    backgroundColor: "black",
  },
  indexInformation: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -27 }],
    top: StatusBar.currentHeight,
    zIndex: 1,
    width: 54,
    textAlign: "center",
    color: colors.white,
    backgroundColor: colors.black,
    borderRadius: 3,
  },
  closeButton: {
    backgroundColor: "black",
    width: "50%",
    color: "white",
    justifyContent: "center",
  },
  closeButtonText: {
    color: colors.white,
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Slider;
