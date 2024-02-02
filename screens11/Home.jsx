/*import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; // Ensure you have expo vector icons installed
 
const { width } = Dimensions.get('window');
 
const Card = ({ title, imageSource }) => (
<View style={styles.card}>
<Image source={imageSource} style={styles.cardImage} />
<Text style={styles.cardTitle}>{title}</Text>
</View>
);
 
const HomeScreen = () => {
  return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.logo}>LOS</Text>
<View style={styles.icons}>
<AntDesign name="bells" size={24} color="white" style={styles.icon} />
<FontAwesome5 name="comments" size={24} color="white" style={styles.icon} />
</View>
</View>
<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
<Card title="SOIRÉE" imageSource={require('./assets/soiree.png')} />
<Card title="AIDE" imageSource={require('./assets/aide.png')} />
        
/*</ScrollView>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logo: {
    fontSize: width * 0.1,
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginVertical: 10,
    width: width * 0.9,
    height: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
    opacity: 0.5,
  },
  cardTitle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});
 
export { HomeScreen };*/