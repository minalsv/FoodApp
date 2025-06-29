// Restaurant.js
import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import styles from './../assets/styles/styles'
const Restaurant = ({ route, navigation }) => {
  const restaurantName = route.params?.restaurantName; // Access restaurant name passed from Home screen

  return (
    <SafeAreaView style={styles.restaurantContainer}>
      <Text style={styles.nameTitle}>{restaurantName}</Text>
      <Text style={styles.description}>Restaurant details will go here...</Text>

      {/* Button to navigate to Menu */}
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('Menu', { restaurantName })}  // Navigate to Menu with restaurantName
      />
    </SafeAreaView>
  );
};


export default Restaurant;
