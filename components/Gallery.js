import React, { useState } from "react";
import { StyleSheet, FlatList, View, StatusBar } from "react-native";

import GalleryCard from "./GalleryCard";
import GalleryCardContainer from "./GalleryCardContainer";

const Gallery = () => {
  const [galleries, setGalleries] = useState([
    {
      title:
        "Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji Polska Strefa Inwestycji",
      url: "http://www.azsajpgorzow.pl/media/k2/galleries/1770/IMG_4362.JPG",
    },
    {
      title: "Polska Strefa Inwestycji",
      url: "http://www.azsajpgorzow.pl/media/k2/galleries/1770/IMG_4368.JPG",
    },
    {
      title: "Polska Strefa Inwestycji",
      url: "http://www.azsajpgorzow.pl/media/k2/galleries/1770/IMG_4371.JPG",
    },
    {
      title: "Polska Strefa Inwestycji",
      url: "http://www.azsajpgorzow.pl/media/k2/galleries/1770/IMG_4362.JPG",
    },
    {
      title: "Polska Strefa Inwestycji",
      url: "http://www.azsajpgorzow.pl/media/k2/galleries/1770/IMG_4362.JPG",
    },
    {
      title: "Polska Strefa Inwestycji",
      url: "http://www.azsajpgorzow.pl/media/k2/galleries/1770/IMG_4362.JPG",
    },
  ]);
  return (
    <>
      <FlatList
        data={galleries}
        renderItem={({ item }) => (
          <GalleryCardContainer>
            <GalleryCard item={item} />
          </GalleryCardContainer>
        )}
        keyExtractor={(item, index) => `${index.toString()}key${item}`}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight,
          marginBottom: 5,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default Gallery;
