import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Récupérer les dimensions de l'écran
const { width, height } = Dimensions.get('window');
 
const ConfirmPasse = () => {
    const navigation = useNavigation();

    const navlogin = () => {
      navigation.navigate('Passe');
    };
  
    const back = () => {
      navigation.navigate('EmailScreen');
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
<Text style={styles.settingsText}>Confirmer votre mot de passe ?</Text>
</View>
 
        <View style={styles.formSection}>

<TextInput
            style={styles.input}
            placeholder="Confirme password"
            keyboardType="password"
            onChangeText={(text) => setNewEmail(text)}
            placeholderTextColor="#ccc"
          />
</View>
<TouchableOpacity style={styles.changeEmailButton} onPress={navlogin}>
  <Text style={styles.changeEmailButtonText}>Confirmer</Text>
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
    marginTop: 0,
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
    flex: 1, // Assure que le logo est centré
    height: 60, // Hauteur fixe pour le logo
    width: null, // Assure que le logo garde son ratio
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 150,
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
 
export { ConfirmPasse };