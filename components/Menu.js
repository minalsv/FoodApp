//react and external library imports
import React from 'react';
import {  SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from './../assets/styles/styles'
import { useRoute } from '@react-navigation/native'; // To access route params

const Menu = () => {
  const route = useRoute();
  const { restaurantName } = route.params; // Get the restaurant name passed from RestaurantScreen

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{restaurantName} Menu</Text>
      <Text style={styles.menuItem}>Pizza - $10</Text>
      <Text style={styles.menuItem}>Pasta - $12</Text>
      <Text style={styles.menuItem}>Gelato - $5</Text>
      {/* Add more menu items here */}
    </SafeAreaView>
  );
};

export default Menu;
