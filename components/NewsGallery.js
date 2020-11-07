import React, { useState } from "react";
import { StyleSheet, Modal, Image, View, TouchableOpacity } from "react-native";
import Slider from "./Slider";

const NewsGallery = ({ images }) => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const changePhoto = (action) => {
    switch (action) {
      case "next":
        setIndex(index + 1);
        break;
      case "back":
        setIndex(index - 1);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Modal visible={visible} transparent={true}>
        <GalleryModal
          index={index}
          images={images}
          onPress={() => setVisible(false)}
          changePhoto={changePhoto}
          next={index === images.length - 1}
          back={index === 0}
        />
      </Modal> */}

      <Modal visible={visible} statusBarTranslucent>
        <Slider
          onClose={() => setVisible(false)}
          gallery={images}
          index={index}
        />
      </Modal>

      {images.map((image, index) => (
        <View style={styles.view} key={`${index}key${image}`}>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
              setIndex(index);
            }}
          >
            <Image source={{ uri: image }} style={styles.image} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // paddingBottom: 100,
  },
  modal: {
    backgroundColor: "tomato",
    width: 300,
    height: 300,
  },
  view: {
    width: "30%",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: "100%",
  },
});

export default NewsGallery;
