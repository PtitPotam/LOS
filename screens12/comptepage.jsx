import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ icon, title, onPress }) => {
  return (
<TouchableOpacity style={styles.menuItem} onPress={onPress}>
<Ionicons name={icon} size={24} color="white" />
<Text style={styles.menuItemText}>{title}</Text>
<Ionicons name="chevron-forward-outline" size={22} color="white" />
</TouchableOpacity>
  );
};
 
const Compte = () => {
  const navigation = useNavigation();

    const navlogin = () => {
      navigation.navigate('ChangePassword');
    };

    const navemail = () => {
      navigation.navigate('ModifEmail');
    };
  
    const back = () => {
      navigation.navigate('ProfileScreen');
    };
 
  return (
<View style={styles.container}>
<ScrollView style={styles.scrollView}>
<View style={styles.header}>
<TouchableOpacity  onPress={back}>
<Ionicons style={styles.flèche} name="arrow-back-outline" size={24} color="white" />
</TouchableOpacity>
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
<Text style={styles.settingsText}>Compte</Text>
</View>
 
        <View style={styles.menuSection}>
          <MenuItem icon="key-outline" title="Changer de mot de passe" onPress={navlogin} />
          <MenuItem icon="mail-outline" title="Modifier email" onPress={navemail} />
        </View>
</ScrollView>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 31,
    
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
    marginLeft: 65,
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
    marginTop: 10,
  },
  menuSection: {
    borderRadius: 12,
    backgroundColor: '#444',
    marginBottom: 50,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuItemText: {
    alignItems: 'center',
    justifyContent: 'center',  
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
 
  },
);
 
export { Compte };