import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import NewsScreen from "../screens/NewsScreen";
import NewsDetails from "../screens/NewsDetailsScreen";

const NewsNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "whitesmoke",
        },
        headerTitleStyle: {
          fontFamily: "Montserrat_700Bold",
          textTransform: "uppercase",
          fontSize: 17,
        },
        headerTitleAlign: "center",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="NewsList"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerTintColor: colors.blue,
        })}
      />
    </Stack.Navigator>
  );
};
export default NewsNavigator;
