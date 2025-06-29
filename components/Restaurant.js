// Restaurant.js
import React from 'react';
import { SafeAreaView, View, Text, Button,ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { TableView, Section, Cell } from 'react-native-tableview-simple';


//import styles from './../assets/styles/restaurantStyles'
import { restaurantItems } from './restaurantItems';



const Restaurant = ({ route }) => {
  const { restaurantName, imgUri } = route.params;  // Get the restaurant name and image URI passed from HomeScreen

  // Find the restaurant based on the passed name
  const restaurant = restaurantItems.find((item) => item.title === restaurantName);

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image as Watermark */}
      <ImageBackground
        source={imgUri}  // Background image for the restaurant
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle} // Optional to apply specific styles to the image
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.overlayContent}>
            <Text style={styles.title}>{restaurantName}</Text>
            <TableView>
              {/* Loop through each category */}
              {restaurant?.categories.map((category, index) => (
                <RestaurantSection
                  key={index}
                  category={category.category}
                  items={category.items}
                />
              ))}
            </TableView>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

// Component for rendering each section (e.g., Desserts, Beverages, etc.)
const RestaurantSection = ({ category, items }) => {
  return (
    <Section header={category} style={styles.section}> {/* Added margin and padding to sections */}
      {items.map((item, index) => (
        <Cell
          key={index}
          title={item.title}
          accessory="disclosureIndicator"
          detail={item.price} // Price displayed on the right side
        />
      ))}
    </Section>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,  // Ensure the background image takes up the full screen
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',  // Align content at the top (you can adjust this)
  },
  backgroundImageStyle: {
    opacity: 0.3,  // Set the opacity to make it look like a watermark
    resizeMode: 'cover',  // Cover the entire screen with the image
  },
  overlayContent: {
    position: 'absolute',
    top: 50,
    left: 16,
    right: 16,
    bottom: 16,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Semi-transparent background for content
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  tableView: {
    marginBottom: 20,  // Add spacing between sections
  },
  section: {
    marginBottom: 10,  // Space between each section
  },
});

export default Restaurant;
