import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';// Make sure to install expo vector icons if you haven't
 
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
  const navigation = useNavigation();

    const navlogin = () => {
      navigation.navigate('Login');
    };

    const navconf = () => {
      navigation.navigate('Politique');
    };

    const navcompte = () => {
      navigation.navigate('Compte');
    };

    const back = () => {
        navigation.navigate('HomeScreen');
      };

    /*const back = () => {
      navigation.navigate('Name');
    };*/
  return (
<View style={styles.container}>
<ScrollView style={styles.scrollView}>
<View style={styles.header}>
<Ionicons name="arrow-back-outline" size={24} color="#B371D2" onPress={back}/>
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
<MenuItem icon="lock-closed-outline" title="Confidentialité et sécurité" onPress={navconf}  />
<MenuItem icon="person-outline" title="Compte" onPress={navcompte} />
</View>
 
        <View style={styles.infoSection}>
<MenuItem icon="exit-outline" title="Déconnexion" onPress={navlogin} />
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
    justifyContent: 'space-between', 
    paddingVertical: 12,
    paddingHorizontal: 60, 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderBottomColor: 'rgba(255, 255, 255, 0.2)', 
  },
  menuItemText: {
    color: 'white',
    fontSize: 16, 
    marginRight: 16, 
  },
 
 
  infoSection: {
    borderRadius: 12,
    backgroundColor: '#8e44ad',
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