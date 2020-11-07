import React from "react";
import { StyleSheet, StatusBar, FlatList } from "react-native";

import PhotosRow from "../components/PhotosRow";

const GalleryDetailsScreen = ({ route: { params } }) => {
  // console.log(params);
  return (
    <FlatList
      data={params.images.slice(params.images.length / 2)}
      renderItem={(item) => {
        return (
          <PhotosRow
            photos={[
              params.images[2 * item.index],
              params.images[2 * item.index + 1],
            ]}
            gallery={params.images}
            index={2 * item.index}
          />
        );
      }}
      keyExtractor={(item, index) => item.toString() + index.toString()}
      contentContainerStyle={{ paddingTop: StatusBar.currentHeight }}
    />
  );
};

export default GalleryDetailsScreen;
