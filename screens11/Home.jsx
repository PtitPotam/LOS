import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', userImage: 'https://img.freepik.com/photos-gratuite/plan-profil-fille-aristocratique-chemisier-volants-dame-fleurs-dans-ses-cheveux-posant-fierement-contre-mur-bleu_197531-14304.jpg', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D', username: 'Sarah', likes: 283 },
  { id: '2', userImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', imageUrl: 'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1665546545/tcjr9rtr5smfzgdgofcg.jpg', username: 'Dimitri', likes: 1579 },
  { id: '3', userImage: 'https://www.imprim-deco.fr/6319-full_default/sticker-profil-new-york.jpg', imageUrl: 'https://img.freepik.com/photos-gratuite/central-park-manhattan-new-york-immense-magnifique-parc-entoure-gratte-ciel-etang_181624-50335.jpg', username: 'New York City', likes: 678065 },
  // Ajoutez plus de données si nécessaire
  
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const navlogin = () => {
    navigation.navigate('Inbox');
  };
      
  const navperson = () => {
    navigation.navigate('ProfileScreen');
  };

  const navsoiree = () => {
    navigation.navigate('SoireScreen');
  };

  const back = () => {
    navigation.navigate('Login');
  };



  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        
        <Image source={{ uri: item.userImage }} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.iconContainer}>
          {/* Icône "J'aime" */}
        </TouchableOpacity>
        <Text style={styles.likes}>{item.likes} J'aime</Text>

      </View>
      
    </View>
  ); 


  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={navperson}>
          <Ionicons name="person-outline" size={24} color="#B371D2" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>LOS</Text>
        <TouchableOpacity style={styles.navButton} onPress={navlogin}>
          <Ionicons name="mail-outline" size={24} color="#B371D2" />
        </TouchableOpacity>
        
      </View>
      <View style={styles.squareContainer}>
        <TouchableOpacity style={styles.square}>
        <TouchableOpacity style={styles.navButton} onPress={navsoiree}>

          <Image
            source={require('../assets/soiree.png')}
            style={styles.headerTitle}
            resizeMode="cover"
            
            
          />
       
           <View style={styles.textContainer }>
        <Text style={styles.overlayText}>Soirée</Text>
        
      </View>
        </TouchableOpacity>
        </TouchableOpacity>
      </View>

      
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.content}
      />
    
    </View>
    
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingTop: 40,
  },
  navButton: {
    padding: 0,
  },
  navTitle: {
    fontWeight: 'white',
    fontSize: 30,
    color: 'white',
  },
  content: {
    flex: 1,
  },
  post: {
    marginBottom: 30,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'white',
    color: 'white',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    marginRight: 20,
    color: "white"
    // Styles pour votre icône
  },
  likes: {
    fontWeight: 'white',
    color: 'white',
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 60,
  },
  square: {
    width: 115,
    height: 115,
    backgroundColor: '#B371D2',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareImage: {
    width: '70%',
    height: '70%',
    borderRadius: 40,
  },

  textContainer: {
    position: 'absolute', // Position absolue par rapport au conteneur parent
    top: 0, // Aligné en haut
    left: 0, // Aligné à gauche
    right: 0, // Aligné à droite
    bottom: 0, // Aligné en bas
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour le contraste
    fontWeight: 'white',
  },
  overlayText: {
    color: 'white', // Couleur du texte
    fontSize: 20, // Taille du texte
    fontWeight: 'white',
  },
});

export { HomeScreen };
