//react and external library imports
import React from 'react';
import {  SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from './../assets/styles/styles'
import { useRoute } from '@react-navigation/native'; // To access route params

const Menu = () => {
  const route = useRoute();
  const { restaurantName } = route.params; // Get the restaurant name passed from RestaurantScreen

  return (
        <SafeAreaView style={styles.safeAreaContainer}>
          <ScrollView style={{height:"100%"}}>
            <TableView style={styles.tableView} separatorColor="#ccc">

            </TableView>
          </ScrollView>
        </SafeAreaView>
  );
};

export default Menu;
