import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

import colors from "../config/colors";
import Slider from "./Slider";

const PhotosRow = ({ photos, gallery, index }) => {
  const [firstPhotoSize, setFirstPhotoSize] = useState(60);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setFirstPhotoSize(
      photos[1] === undefined ? 100 : Math.floor(Math.random() * 40 + 30)
    );
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsVisible(true);
          setCurrentIndex(index);
        }}
      >
        <Image
          style={[styles.image, { width: `${firstPhotoSize}%` }]}
          source={{ uri: photos[0] }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsVisible(true);
          setCurrentIndex(index + 1);
        }}
      >
        <Image
          style={[styles.image, { width: `${98 - firstPhotoSize}%` }]}
          source={{ uri: photos[1] }}
        />
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} statusBarTranslucent>
        <Slider
          onClose={() => setIsVisible(false)}
          gallery={gallery}
          index={currentIndex}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 200,
    marginVertical: "1%",
    // backgroundColor: colors.blue,
  },
});

export default PhotosRow;
