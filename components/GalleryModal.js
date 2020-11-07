import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

const GalleryModal = ({ images, index, onPress, changePhoto, next, back }) => {
  // console.log(images[index]);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={colors.blue}
          style={styles.close}
          onPress={onPress}
        >
          <AntDesign name={"close"} size={100} color={"whitesmoke"} />
        </TouchableHighlight>
        <Image
          resizeMode={"contain"}
          style={styles.image}
          source={{ uri: images[index] }}
        />
        {!next && (
          <TouchableHighlight
            underlayColor={colors.blue}
            style={styles.next}
            onPress={() => changePhoto("next")}
          >
            <FontAwesome
              style={styles.icon}
              name={"angle-right"}
              size={100}
              color={"whitesmoke"}
            />
          </TouchableHighlight>
        )}

        {!back && (
          <TouchableHighlight
            underlayColor={colors.blue}
            style={styles.back}
            onPress={() => changePhoto("back")}
          >
            <FontAwesome name={"angle-left"} size={100} color={"whitesmoke"} />
          </TouchableHighlight>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(51, 51, 51, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "40%",
  },
  back: {
    position: "absolute",
    padding: 20,
    left: 70,
    bottom: 100,
    borderRadius: 20,
  },
  next: {
    position: "absolute",
    padding: 20,
    right: 70,
    bottom: 100,
    borderRadius: 20,
  },
  close: {
    position: "absolute",
    top: 100,
    borderRadius: 20,
  },
});

export default GalleryModal;
