import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';
const Stack = createStackNavigator();

// Restaurants Screen component
function RestaurantsScreen() {
  return (
    <View style={styles.container}>
      <Text>Restaurants Screen</Text>
    </View>
  );
}

// Menu Screen component
function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Add the Restaurants screen */}
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />

        {/* Add the Menu screen */}
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
