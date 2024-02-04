import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Récupérez les dimensions de l'écran actuel
const { width } = Dimensions.get('window');
 
const ChangePassword = () => {
    const navigation = useNavigation();

    const navlogin = () => {
      navigation.navigate('ChangePassword');
    };
  
    const back = () => {
      navigation.navigate('Compte');
    };

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
 
  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      Alert.alert('Succès', 'Le mot de passe a été modifié avec succès.');
    } else {
      Alert.alert('Erreur', 'Les nouveaux mots de passe ne correspondent pas.');
    }
  };
 
  return (
<View style={styles.container}>
<ScrollView contentContainerStyle={styles.scrollView}>
<View style={styles.header}>
<TouchableOpacity  onPress={back}>
<Ionicons name="arrow-back-outline" size={24} color="#B371D2" />
</TouchableOpacity>
<Image
            source={require('../assets/logo.png')}
            style={styles.headerTitle}
          />
</View>
 
        <View style={styles.profileSection}>
<Image
            source={require('../assets/image.png')}
            style={styles.avatar}
          />
<Text style={styles.name}>Rose Cleteau</Text>
<Text style={styles.settingsText}>Changer de mot de passe</Text>
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
            placeholder="Nouveau mot de passe"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            placeholderTextColor="#ccc"
          />
<TextInput
            style={styles.input}
            placeholder="Confirmer le nouveau mot de passe"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
            placeholderTextColor="#ccc"
          />
</View>
 
        <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
<Text style={styles.changePasswordButtonText}>Changer le mot de passe</Text>
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    // Ajustement pour que le logo soit centré si nécessaire
    flex: 1,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
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
    color: 'white',
  },
  input: {
    backgroundColor: '#444',
    borderRadius: 8,
    height: 40,
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    placeholderTextColor: '#000',
    width: width * 0.8,
  },
  changePasswordButton: {
    backgroundColor: '#8e44ad',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    // Ajustement de la largeur du bouton pour qu'il soit proportionnel à la largeur de l'écran
    width: width * 0.8,
    alignSelf: 'center', // Centre le bouton dans le ScrollView
  },
  changePasswordButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
 
export { ChangePassword };