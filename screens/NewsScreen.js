import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  TouchableHighlight,
  View,
  StatusBar,
  ScrollView,
} from "react-native";

import LoadingScreen from "./LoadingScreen";
import NewsCard from "../components/NewsCard";
import Screen from "../components/Screen";
import Separator from "../components/Separator";

const NewsScreen = ({ navigation }) => {
  const [news, setNews] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const getNews = () => {
    fetch("http://azsapi.herokuapp.com/news")
      .then((resp) => resp.json())
      .then((data) => {
        setNews(data);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getNews();
  });

  useEffect(() => {
    getNews();
  }, []);

  return news === undefined ? (
    <LoadingScreen />
  ) : (
    <>
      <FlatList
        ItemSeparatorComponent={() => <Separator />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={news.sort((a, b) => {
          let dateA = new Date(a.date.length === 13 ? +a.date : a.date),
            dateB = new Date(b.date.length === 13 ? +b.date : b.date);
          return dateB - dateA;
        })}
        style={{paddingTop: StatusBar.currentHeight}}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => navigation.navigate("NewsDetails", item)}
            style={{
              borderRadius: 15,
              overflow: "hidden",
              width: "95%",
              marginLeft: "2.5%",
            }}
          >
            <Screen>
              <NewsCard image={{ uri: item.imagePath }} item={item} />
            </Screen>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
    </>
  );
};

export default NewsScreen;
