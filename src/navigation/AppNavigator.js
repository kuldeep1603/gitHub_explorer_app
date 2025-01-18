import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Fav from '../pages/Fav';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import RepositoryDetails from '../components/RepositoryDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="RepositoryDetails" 
        component={RepositoryDetails}
        options={({ route }) => ({
          title: route.params.repository.name,
        })}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Search" component={HomeStack} />
        <Tab.Screen name="Favorites" component={Fav} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;