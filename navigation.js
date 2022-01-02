import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TrendingScreen from "./screens/TrendingScreen";
import Details from "./components/Details";



export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TrendingScreen" screenOptions={screenOptions}>
          <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}