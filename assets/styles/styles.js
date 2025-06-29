import { StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center' },
      title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
      description: { fontSize: 16, marginBottom: 20 },
      menuText: { fontSize: 18, color: 'blue', textDecorationLine: 'underline',
      backgroundColor: 'lightGreen',
  },
  tableView: {
      flex: 1,
  },
  cell: {
    height: 290, // Set the height to 290px
    backgroundColor: 'transparent', // Transparent background
    borderBottomWidth: 2, // Remove bottom border (you can customize this as needed)
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, // Rounded corners for the image
  },
  etaContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for ETA
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for text
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
  cellContainer: {
     marginBottom: 10,
  },
  restaurantContainer: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
  },
  nameTitle: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  description: {
      fontSize: 16,
      marginTop: 10 },

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
});

export default styles;
