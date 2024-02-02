import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo vector icons if you haven't
 
const MenuItem = ({ icon, title, onPress }) => {
  return (
<TouchableOpacity style={styles.menuItem} onPress={onPress}>
<Ionicons name={icon} size={24} color="white" />
<Text style={styles.menuItemText}>{title}</Text>
<Ionicons name="chevron-forward-outline" size={24} color="white" />
</TouchableOpacity>
  );
};
 
const ProfileScreen = () => {
  return (
<View style={styles.container}>
<ScrollView style={styles.scrollView}>
<View style={styles.header}>
<Ionicons name="arrow-back-outline" size={24} color="white" />
<Image
            source={require('../assets/logo.png')}
            style={styles.headerTitle}>
                </Image>
</View>
 
        <View style={styles.profileSection}>
<Image
            source={require('../assets/image.png')}
            style={styles.avatar}
          />
<Text style={styles.name}>Rose Cleteau</Text>
<Text style={styles.settingsText}>Paramètres</Text>
</View>
 
        <View style={styles.menuSection}>
<MenuItem icon="lock-closed-outline" title="Confidentialité et sécurité" onPress={() => {}} />
<MenuItem icon="person-outline" title="Compte" onPress={() => {}} />
</View>
 
        <View style={styles.infoSection}>
<MenuItem icon="information-circle-outline" title="Infos" onPress={() => {}} />
</View>
 
        <View style={styles.footer}>
<Text style={styles.versionText}>Version</Text>
<Text style={styles.versionNumber}>0.1.02</Text>
</View>
</ScrollView>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  scrollView: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsText: {
    color: 'white',
  },
  menuSection: {
    borderRadius: 12,
    backgroundColor: '#444',
    marginBottom: 20,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures items are spaced out
    paddingVertical: 12,
    paddingHorizontal: 60, // Increase horizontal padding if needed
    borderBottomWidth: StyleSheet.hairlineWidth, // Optional: adds a separator
    borderBottomColor: 'rgba(255, 255, 255, 0.2)', // Optional: separator color
  },
  menuItemText: {
    color: 'white',
    fontSize: 16, // Adjust the font size as needed
    // Remove flex: 1 if you want to ensure the text does not stretch
    marginRight: 16, // Ensure there is space between the text and the chevron icon
  },
 
 
  infoSection: {
    borderRadius: 12,
    backgroundColor: '#444',
    padding: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  versionText: {
    color: 'white',
  },
  versionNumber: {
    color: 'white',
  },
});
 
export { ProfileScreen };