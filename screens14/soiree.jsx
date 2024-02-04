import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SoireScreen = () => {
  const navigation = useNavigation();

  const navlogin = () => {
    navigation.navigate('Inbox');
  };
      

  const back = () => {
    navigation.navigate('HomeScreen');
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
        <TouchableOpacity style={styles.navButton} onPress={back}>
          <Ionicons  name="arrow-back-outline" size={24} color="#B371D2" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>LOS</Text>
        <TouchableOpacity style={styles.navButton} onPress={navlogin}>
          <Ionicons name="mail-outline" size={24} color="#B371D2" />
        </TouchableOpacity>
        
      </View>

     

      <View style={styles.squareContainer}>
        <TouchableOpacity style={styles.square}>
          <Image
            source={require('../assets/soiree.png')}
            style={styles.headerTitle}
            resizeMode="cover"
            
          />
           <View style={styles.textContainer}>
        {/* Texte superposé */}
        <Text style={styles.overlayText}>Soirée</Text>
      </View>
        </TouchableOpacity>

      </View>



      {/* Carrés modifiables et cliquables */}
     
      <View style={styles.carre}>
        <TouchableOpacity style={styles.square}>
        <Image
            source={require('../assets/mada.jpg')}
            style={styles.headerTitle}
            resizeMode="cover"
            
          />
         
           <View style={styles.textContainer}>
        {/* Texte superposé */}
        <Text style={styles.overlayText}>Mada</Text>
      </View>
        </TouchableOpacity>


        <View style={styles.textcarre}>
       
    <Text style={{ color: 'white' }}>05/02{"\n"} </Text>
    <Text style={{ color: 'white' }}>30% de réductions de 20H à 22H {"\n"} </Text>
    <Text style={{ color: 'white' }}>20 Rue Piliers de Tutelle, Bordeaux </Text>
 
        </View>

      </View>

    
      <View style={styles.carre}>
        <TouchableOpacity style={styles.square}>
        <Image
            source={require('../assets/joya.png')}
            style={styles.headerTitle}
            resizeMode="cover"
            
          />
          
     <View style={styles.textContainer}>
     <Text style={styles.overlayText}>Joya</Text>
     </View>
        </TouchableOpacity>
        <View style={styles.textcarre}>

       <Text style={{ color: 'white' }}>05/02{"\n"} </Text>
       <Text style={{ color: 'white' }}>1 bouteille acheté, 1 offerte {"\n"} </Text>
       <Text style={{ color: 'white' }}>106 Quai Lawton, 33300 Bordeaux </Text>
    
           </View>

      </View>


    
      <View style={styles.carre}>
        <TouchableOpacity style={styles.square}>
        <Image
            source={require('../assets/carnaval.png')}
            style={styles.headerTitle}
            resizeMode="cover"
            
          />
         
           <View style={styles.textContainer}>
           <Text style={styles.overlayText}>Carnaval</Text>
      </View>
        </TouchableOpacity>

        <View style={styles.textcarre}>

<Text style={{ color: 'white' }}>06/02{"\n"} </Text>
<Text style={{ color: 'white' }}>-50% avec la carte étudiante {"\n"} </Text>
<Text style={{ color: 'white' }}>14bis RueDuffour Dubergier,Bdx </Text>

    </View>

      </View>
      
  
    
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
    padding: 10,
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
    marginBottom: 0,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
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
    width: '40%',
    height: 150,
    resizeMode: 'center',
    padding: '10%'
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
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
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  squareImage: {
   
    borderRadius: 40,
  },

  textContainer: {
    color: 'white',
    position: 'absolute', // Position absolue par rapport au conteneur parent
    top: 0, // Aligné en haut
    left: 0, // Aligné à gauche
    right: 0, // Aligné à droite
    bottom: 0, // Aligné en bas
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    backgroundColor: 'rgba(0, 0, 0, 0)', // Fond semi-transparent pour le contraste
    fontWeight: 'white',
  },
  overlayText: {
    color: 'white', // Couleur du texte
    fontSize: 20, // Taille du texte
    fontWeight: 'white',
  },
   carre: {
    flexDirection: 'row',
    justifyContent: 'left',
    paddingHorizontal: 20,
    marginTop: 30,
    borderRadius: 60,
    paddingVertical: 10,
  },

  textcarre: {
    padding: 0,
    paddingHorizontal: 20,
    paddingVertical: 10, 
    color: 'white', // Modifier la couleur du texte en blanc
    fontSize: 20, // Taille du texte
    fontWeight: 'bold', // Police en gras
     },
});

export { SoireScreen };
