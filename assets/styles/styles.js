import { StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center' },
      title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
      description: { fontSize: 16, marginBottom: 20 },
      menuText: { fontSize: 18, color: 'blue', textDecorationLine: 'underline' },
  tableView: {
      flex: 1,
  },
  cell: {
    height: 290, // Set the height to 290px
    backgroundColor: 'transparent', // Transparent background
    borderBottomWidth: 0, // Remove bottom border (you can customize this as needed)
  },
  cellContent: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 170, // Adjust image height to fit the design
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
});

export default styles;
