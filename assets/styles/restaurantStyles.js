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

});

export default styles;