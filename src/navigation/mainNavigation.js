import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeNavigation from "./screens/HomeNavigation/HomeNavigation";
import SearchDetailNavigation from "./screens/SearchDetailNavigation/SearchDetailNavigation";
import SearchNavigation from "./screens/SearchNavigation/SearchNavigation";

//Screen names
const homeName = "Home";
const searchName = "Search";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={searchName} component={SearchNavigation} />
      <Stack.Screen
        name="selected"
        component={SearchDetailNavigation}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => {
          // La barra de abajo, navegar de la casa a la lupa
          switch (route.name) {
            case homeName:
              return {
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? "home" : "home-outline";
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "grey",
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 13 },
                tabBarStyle: [{ display: "flex", height: 60 }, null],
              };
            case searchName:
              return {
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? "search" : "search-outline";
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "grey",
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 13 },
                tabBarStyle: [{ display: "flex", height: 60 }, null],
                headerShown: false,
              };
            default:
              return {};
          }
        }}
      >
        <Tab.Screen name={homeName} component={HomeNavigation} />
        <Tab.Screen name={searchName} component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
