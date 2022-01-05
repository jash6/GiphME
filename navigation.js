import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrendingScreen from "./screens/TrendingScreen";
import Details from "./components/Details";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BrowseScreen from "./screens/BrowseScreen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
  };

  function StackScreen() {
    return (
      <Stack.Navigator
        initialRouteName="TrendingScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
              size = focused ? 25 : 20;
              color = focused ? "#f0f" : "#555";
            } else if (route.name === "Browse") {
              iconName = "search";
              size = focused ? 25 : 20;
              color = focused ? "#f0f" : "#555";
            } else if (route.name === "Profile") {
              iconName = "user";
              size = focused ? 25 : 20;
              color = focused ? "#f0f" : "#555";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "#f0f",
          inactiveTintColor: "#555",
        }}
      >
        <Tab.Screen name="Home" component={StackScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
