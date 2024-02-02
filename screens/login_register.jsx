import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
 
const Login = () => {
  const navigation = useNavigation();

  const navlogin = () => {
    navigation.navigate('Name');
  };

  const handleSignIn = () => {
    navigation.navigate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOS</Text>
      <TouchableOpacity style={[styles.button, { width: width * 0.8 }]} onPress={navlogin}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: width * 0.8 }]} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1F', // Fond noir
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20%',
  },
  logo: {
    fontSize: height < 650 ? 36 : 48, // Taille de police plus petite pour les petits appareils
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: height < 650 ? 60 : 120, // Moins d'espacement pour les petits appareils
  },
  button: {
    backgroundColor: '#8e44ad', // Couleur violet
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginVertical: height < 650 ? 5 : 10, // Moins d'espacement pour les petits appareils
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Texte blanc
    fontSize: 18,
  },
});
 
export { Login };
