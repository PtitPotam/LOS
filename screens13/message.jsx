import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const InboxItem = ({ sender, lastMessage, time, profileImage }) => {

  return (
    <View style={styles.inboxItemContainer}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <View style={styles.inboxItemContent}>
        <Text style={styles.senderText}>{sender}</Text>
        <Text style={styles.lastMessageText}>{lastMessage}</Text>
      </View>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};
 
const firstNames = ['John', 'Alice', 'Bob', 'Emma', 'Charlie', 'Olivia', 'David', 'Sophia', 'Ethan', 'Mia', 'James', 'Ava', 'Michael', 'Isabella', 'William', 'Grace', 'Alexander', 'Lily', 'Daniel', 'Zoe'];
 
const generateRandomFirstName = () => {
  const randomIndex = Math.floor(Math.random() * firstNames.length);
  return firstNames[randomIndex];
};
 
const Inbox = () => {
    
  const inboxData = [];
 
  // Generate 20 conversations
  for (let i = 0; i < 20; i++) {
    inboxData.push({
      sender: generateRandomFirstName(),
      lastMessage: `Last message ${i + 1}`,
      time: `Time ${i + 1}`,
      profileImage: `https://placekitten.com/50/${50 + i}`, // Replace with actual image URL
    });
  }
 
  const navigation = useNavigation();

  const navmessage = () => {
    navigation.navigate('');
  };

  const back = () => {
    navigation.navigate('HomeScreen');

  }

  return (
    <View style={styles.container}>
      {/* Header */}


      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#B371D2" onPress={back} />
        <Image
          source={require('../assets/logo.png')}
          style={styles.headerTitle}
        />
      </View>
 
      {/* Space between header and messages */}
      <View style={styles.headerSpace}></View>
 
      {/* Inbox List */}
      <FlatList
        data={inboxData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <InboxItem {...item} />}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the items horizontally
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#333',
  },
  arrowBack: {
    position: 'center',
    left: 2,
  },
  headerTitle: {
    width: 120, // Adjust the width as needed
    height: 30, // Adjust the height as needed
  },
  headerSpace: {
    height: 50, // Adjust the height as needed
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop:40
  },
  inboxItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  inboxItemContent: {
    flex: 1,
  },
  senderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  lastMessageText: {
    color: 'white',
  },
  timeText: {
    color: '#666',
    fontSize: 12,
  },
});
 
export { Inbox };