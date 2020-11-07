import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import GalleryCard from "../components/GalleryCard";
import GalleryCardContainer from "../components/GalleryCardContainer";

const GalleryScreen = ({ navigation }) => {
  const loadingData = [
    {
      title: "Ładowanie...",
      images: [null],
    },
    {
      title: "Ładowanie...",
      images: [null],
    },
    {
      title: "Ładowanie...",
      images: [null],
    },
    {
      title: "Ładowanie...",
      images: [null],
    },
    {
      title: "Ładowanie...",
      images: [null],
    },
    {
      title: "Ładowanie...",
      images: [null],
    },
    {
      title: "Ładowanie...",
      images: [null],
    },
  ];
  const [galleries, setGalleries] = useState(loadingData);
  const [refreshing, setRefreshing] = useState(false);

  const getGalleries = () => {
    fetch("http://azsapi.herokuapp.com/galleries")
      .then((resp) => resp.json())
      .then((data) => setGalleries(data), setRefreshing(false))
      .catch((err) => console.log(err));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setGalleries(loadingData);
    getGalleries();
  });

  useEffect(() => {
    getGalleries();
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={galleries}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("GalleryDetails", item)}
          activeOpacity={0.7}
        >
          <GalleryCardContainer>
            <GalleryCard item={item} />
          </GalleryCardContainer>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => `${index.toString()}key${item}`}
      contentContainerStyle={{
        paddingTop: StatusBar.currentHeight,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default GalleryScreen;
