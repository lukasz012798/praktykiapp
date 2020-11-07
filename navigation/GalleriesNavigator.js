import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import GalleryScreen from "../screens/GalleryScreen";
import GalleryDetailsScreen from "../screens/GalleryDetailsScreen";

const GalleriesNavigator = () => {
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
        name="Galleries"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GalleryDetails"
        component={GalleryDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerTintColor: colors.blue,
        })}
      />
    </Stack.Navigator>
  );
};
export default GalleriesNavigator;
