// Restaurant.js
import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation

const Restaurant = ({ route, navigation }) => {
  const restaurantName = route.params?.restaurantName; // Access restaurant name passed from Home screen

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{restaurantName}</Text>
      <Text style={styles.description}>Restaurant details will go here...</Text>

      {/* Button to navigate to Menu */}
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('Menu', { restaurantName })}  // Navigate to Menu with restaurantName
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  description: { fontSize: 16, marginTop: 10 },
});

export default Restaurant;
