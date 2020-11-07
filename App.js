import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Anton_400Regular } from "@expo-google-fonts/anton";
import { Text } from "react-native";

import NavigationContainer from "./navigation/NavigationContainer";
// import Text from "./components/Text";

export default function App() {
  let [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Anton_400Regular,
  });
  if (!fontLoaded) return <Text>Wczytywanie</Text>;
  else return <NavigationContainer />;
}
