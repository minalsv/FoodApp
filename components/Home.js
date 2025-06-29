// Home.js
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { TableView, Section } from 'react-native-tableview-simple'; // TableView for listing restaurants
import HomeScreenCell from './HomeScreenCell'; // Custom cell for each restaurant
import styles from './../assets/styles/styles'; // Import styles
import { useNavigation } from '@react-navigation/native'; // For navigation

const Home = () => {
  const navigation = useNavigation(); // Get navigation prop

  // List of restaurants
  const restaurants = [
    { name: "Joe's Gelato", tagline: "Desert, Ice cream, £££", eta: "10-30", imgUri: require('../assets/images/ice-cream.jpg') },
    { name: "Pasta Paradise", tagline: "Italian Cuisine, Pasta, ££", eta: "15-25", imgUri: require('../assets/images/pasta.jpg') },
    { name: "Burger Haven", tagline: "Burgers, Fries, £", eta: "5-15", imgUri: require('../assets/images/burger.jpg') }
  ];

  // Navigate to the Restaurant screen with the restaurant name
  const handleCellPress = (restaurantName) => {
    navigation.navigate('Restaurant', { restaurantName });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={{height:"100%"}}>
        <TableView style={styles.tableView} separatorColor="#ccc">
          <Section header="" hideSeparator={true}>
            {restaurants.map((restaurant, index) => (
              <HomeScreenCell
                key={index}
                title={restaurant.name}
                tagline={restaurant.tagline}
                eta={restaurant.eta}
                imgUri={restaurant.imgUri}
                onPress={() => handleCellPress(restaurant.name)}  // Navigate to Restaurant screen
              />
            ))}
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

