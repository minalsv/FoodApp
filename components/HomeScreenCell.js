// HomeScreenCell.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  cellContainer: {
    marginBottom: 10,
  },
  cellContent: {
    position: 'relative',
    height: 290,
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
  },
  etaContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  etaText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textContent: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagline: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HomeScreenCell;

