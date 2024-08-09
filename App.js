import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// Importação das telas
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import SettingsScreen from './src/pages/SettingsScreen';
import GalleryScreen from './src/pages/GalleryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#E4CEF2',
          tabBarActiveBackgroundColor: '#9E68CA',
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#7942B9',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='user' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='settings' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='photo' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
