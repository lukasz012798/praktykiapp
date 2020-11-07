import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StatusBar as StatusBarNative,
} from "react-native";

import LoadingScreen from "./LoadingScreen";
import ResultCard from "../components/ResultCard";
import ResultCardContainer from "../components/ResultCardContainer";

const ResultsScreen = () => {
  const [results, setResults] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const getResults = () => {
    fetch("http://azsapi.herokuapp.com/results")
      .then((resp) => resp.json())
      .then((data) => {
        setResults(data);
        setRefreshing(false);
      })
      .catch((error) => console.log(error));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getResults();
  });

  useEffect(() => {
    getResults();
  }, []);

  return results === undefined ? (
    <LoadingScreen />
  ) : (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={results.sort((a, b) => {
        let dateA = new Date(a.date.length === 13 ? +a.date : a.date),
          dateB = new Date(b.date.length === 13 ? +b.date : b.date);
        return dateB - dateA;
      })}
      renderItem={({ item }) => (
        <ResultCardContainer>
          <ResultCard item={item} />
        </ResultCardContainer>
      )}
      keyExtractor={(item) => item._id.toString()}
      style={{ paddingTop: StatusBarNative.currentHeight }}
    />
  );
};

export default ResultsScreen;
