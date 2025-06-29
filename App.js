import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';

// Import Screens
import RestaurantsScreen from './components/Restaurants';
import MenuScreen from './components/Menu';
import styles from './assets/styles/styles'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

