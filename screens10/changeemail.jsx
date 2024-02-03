import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
// Récupérez les dimensions de l'écran actuel
const { width } = Dimensions.get('window');
 
const ModifEmail = () => {
    const navigation = useNavigation();

    const navlogin = () => {
      navigation.navigate('ChangePassword');
    };
  
    const back = () => {
      navigation.navigate('Compte');
    };

  const [currentPassword, setCurrentPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmNewEmail, setConfirmNewEmail] = useState('');
 
  const handleChangeEmail = () => {
    if (newEmail === confirmNewEmail) {
      Alert.alert('Succès', "L'e-mail a été modifié avec succès.");
    } else {
      Alert.alert('Erreur', "Les nouveaux e-mails ne correspondent pas.");
    }
  };
 
  return (
<View style={styles.container}>
<ScrollView contentContainerStyle={styles.scrollView}>
<View style={styles.header}>
<TouchableOpacity  onPress={back}>
<Ionicons name="arrow-back-outline" size={24} color="white" />
</TouchableOpacity>
<Image
            source={require('../assets/logo.png')}
            resizeMode="contain"
            style={styles.headerTitle}
          />
</View>
 
        <View style={styles.profileSection}>
<Image
            source={require('../assets/image.png')}
            resizeMode="contain"
            style={styles.avatar}
          />
<Text style={styles.name}>Rose Cleteau</Text>
<Text style={styles.settingsText}>Changer d'Email</Text>
</View>
 
        <View style={styles.formSection}>
<TextInput
            style={styles.input}
            placeholder="Mot de passe actuel"
            secureTextEntry
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
            placeholderTextColor="#ccc"
          />
<TextInput
            style={styles.input}
            placeholder="Nouvel Email"
            keyboardType="email-address"
            value={newEmail}
            onChangeText={(text) => setNewEmail(text)}
            placeholderTextColor="#ccc"
          />
<TextInput
            style={styles.input}
            placeholder="Confirmer le nouvel Email"
            keyboardType="email-address"
            value={confirmNewEmail}
            onChangeText={(text) => setConfirmNewEmail(text)}
            placeholderTextColor="#ccc"
          />
</View>
 
<TouchableOpacity style={styles.changeEmailButton} onPress={handleChangeEmail}>
  <Text style={styles.changeEmailButtonText}>Changer l'Email</Text>
</TouchableOpacity>
</ScrollView>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: width * 0.05,
  },

  scrollView: {
    padding: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  headerTitle: {
    flex: 1, // Assure que le logo est centré
    height: 60, // Hauteur fixe pour le logo
    width: null, // Assure que le logo garde son ratio
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 100,
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
  formSection: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#444',
    borderRadius: 8,
    height: 40,
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  changeEmailButton: {
    backgroundColor: '#8e44ad',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  changeEmailButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
 
export { ModifEmail };