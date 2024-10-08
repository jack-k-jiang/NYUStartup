import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/homescreen";
import MarketPlaceScreen from "@/screens/marketplacescreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="MarketplaceScreen"
        component={MarketPlaceScreen}
      />
    </HomeStack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ tabBarBadge: 6 }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
