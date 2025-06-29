// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// Import project files
import Restaurant from './components/Restaurant';
import Home from './components/Home';
import Menu from './components/Menu';  // Import Menu Screen
import styles from './assets/styles/styles';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




