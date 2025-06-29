// HomeScreenCell.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './../assets/styles/styles'
const HomeScreenCell = ({ title, tagline, eta, imgUri, onPress }) => {
  return (
    <TouchableOpacity style={styles.cellContainer} onPress={onPress}>
      <View style={styles.cellContent}>
        {/* Image Header */}
        {imgUri && <Image source={imgUri} style={styles.image} />}

        {/* ETA positioned absolutely */}
        {eta && (
          <View style={styles.etaContainer}>
            <Text style={styles.etaText}>{eta}</Text>
          </View>
        )}

        {/* Restaurant Name and Tagline */}
        <View style={styles.textContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreenCell;

