import { View, Text, StyleSheet, Image, ScrollView,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
   
  const Politique = () => {
    const navigation = useNavigation();

    const navlogin = () => {
      navigation.navigate('Login');
    };
  
    const back = () => {
      navigation.navigate('ProfileScreen');
    };
    return (
  <View style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.header}>
  <Ionicons name="arrow-back-outline" size={24} color="#B371D2" onPress={back} />
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
  <Text style={styles.settingsText}>Politique de confidentialité</Text>
  </View>
 
        <View style={styles.politique}>
<Text style={styles.politiqueText}>
 
1. **Introduction** :
Le but est de crée un réseau social permettant au étudiant de s’aidée et de se rencontrer, partager des activités entre eux tout dans le respect et l’égalité. C’est pour cela que la gestion des contenus inappropriés seront inaccessible afin de protéger la protection de la vie privée des utilisateurs et la promotion d'une expérience positive pour l'ensemble de la communauté.
2. **Collecte et Utilisation des Données** : les données collectées sont les suivantes :
    
    nom et prénom compte, mail, numéro de téléphone, âge, carte étudiante, mot de passe, like, canaux utilisé
    
3. **Consentement** :
- Le consentement est recueilli par les conditions d’utilisations qui doivent être accepté pour pouvoir utiliser l’application. Le consentement est recueilli la première fois quand on s’inscrit sur l’app.
4. **Partage et Divulgation** : Conditions sous lesquelles les données peuvent être partagées.
- Nom Prénom (pseudo), Sexe, photos de profil, Biographie (Niveau d’études, lieux d’études) , localisation
5. **Sécurité** : Mesures prises pour protéger les données : On utilisera des protocoles de chiffrement robustes pour garantir la confidentialité des informations + authentification à deux facteurs + un système de gestion des accès rigoureux
6. **Droits des Utilisateurs** : Comment les utilisateurs peuvent exercer leurs droits en vertu de la loi. : Les utilisateurs ont le droit de demander et d'obtenir une copie des données personnelles que l'application détient sur eux. Les utilisateurs ont le droit de demander la correction de données personnelles inexactes ou incomplètes. Les utilisateurs ont le droit de demander la suppression de leurs données personnelles dans certaines circonstances. Mise en place un processus permettant aux utilisateurs de soumettre des demandes d'effacement et de traiter ces demandes de manière diligente.
7. **Modifications de la Politique** : Comment les changements seront communiqués : alerte dans les notifications indiquant un changement
8. **Contact** : Los@gmail.com, 06 38 56 94 29
 
### Difficultés Rencontrées
 
- **Complexité Juridique** : Assurer la conformité avec les multiples niveaux de réglementations tout en maintenant une politique compréhensible.
- **Mise à jour Constante** : Suivre les évolutions légales pour maintenir la conformité.
- **Équilibrage de la Transparence** : Fournir des informations complètes tout en gardant le document accessible.
 
# **Audit :**
 
Pourquoi on avait pas fait de politique de confidentialité ?
 
Parce que on ne savait pas à quel point c’était important mais graçe à la maserclasse nous avons compris tout les enjeux derrière.
 
Nous avons donc rédiger les grandes lignes de notre politique et l’avons incrusté dans notre prototype.
 
Comment faire pour connaître l’âge des utilisateurs ?
 
Nous n’avons pas pris en compte l’importance de savoir si l’utilisateur est mineur ou majeur.
 
Nous avons alors décidé de mettre en place un système de carte étudiante.
 
1. **Collecte et Utilisation des Données** : L'application collecte des informations personnelles telles que le nom, prénom, email, numéro de téléphone, âge, carte étudiante, mot de passe, préférences (likes), et les canaux utilisés.
2. **Consentement** : Le consentement des utilisateurs est recueilli lors de l'inscription sur l'application, via l'acceptation des conditions d'utilisation.
3. **Partage et Divulgation** : Certaines données comme le nom, le prénom (ou pseudo), le sexe, les photos de profil, la biographie (niveau et lieu d'études), et la localisation peuvent être partagées sous certaines conditions.
4. **Sécurité** : Pour protéger les données, l'application utilise des protocoles de chiffrement avancés, une authentification à deux facteurs et un système de gestion des accès rigoureux.
5. **Droits des Utilisateurs** : Les utilisateurs peuvent demander une copie de leurs données personnelles, la correction de données inexactes ou incomplètes, et la suppression de leurs données sous certaines conditions. L'application a mis en place un processus pour traiter ces demandes rapidement.
6. **Modifications de la Politique** : Les utilisateurs seront informés des modifications de la politique de confidentialité via des alertes dans les notifications.
7. **Contact** : Pour toute question ou requête, les utilisateurs peuvent contacter l'application via l'email Los@gmail.com ou par téléphone au 06 38 56 94 29.</Text>
</View>
</ScrollView>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center'
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
    paddingLeft: '15%',
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  
  politique: {
    alignItems: 'center',
    marginTop: 20,
  },
  politiqueText: {
    color: 'white',
    textAlign: 'center'
  },
});
 
export { Politique };