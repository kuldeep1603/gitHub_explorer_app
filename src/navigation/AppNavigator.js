import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Fav from '../pages/Fav';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <>
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
                        tabBarActiveTintColor: "blue",
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <Tab.Screen name="Search" component={Home} />
                    <Tab.Screen name="Favorites" component={Fav} />
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigator
