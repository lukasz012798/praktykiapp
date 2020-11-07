import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import GalleriesNavigator from "./GalleriesNavigator";
import NewsNavigator from "./NewsNavigator";
import ResultsScreen from "../screens/ResultsScreen";
import SquadScreen from "../screens/SquadScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.blue,
          inactiveTintColor: "#333",
          labelStyle: {
            fontFamily: "Montserrat_600SemiBold",
            // textTransform: "uppercase",
          },
          tabStyle: {
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="News"
          component={NewsNavigator}
          options={{
            title: "aktualności",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="newspaper" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            title: "wyniki",
            tabBarIcon: ({ color, size }) => (
              <Foundation name="results" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Squad"
          component={SquadScreen}
          options={{
            title: "skład",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="handball"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleriesNavigator}
          options={{
            title: "galeria",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="camera" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
