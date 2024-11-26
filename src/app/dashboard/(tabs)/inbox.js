import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Inbox = () => {
  
  const notifications = [
    { id: '1', name: 'Robert Dobbs', handle: '@iamrobertdobbs', message: 'Sent you a link: The music video for my band\'s new single "Levitation" is now on...', timestamp: '03 Aug 20' },
    { id: '2', name: 'Tala', handle: '@pwsrings', message: 'twitter.com/Neaskycrape/st...', timestamp: '04 Apr 20' },
    { id: '3', name: 'FamAsteraceae', handle: '@FamAsteraceae', message: 'ONLY FOR YOU Bete ko kay', timestamp: '17 Sept 19' },
    { id: '4', name: 'engr.banisa', handle: '@banisaaab', message: 'ONLY FOR YOU Bete ko kay', timestamp: '31 Aug 19' },
    { id: '5', name: 'stella', handle: '@mystrella', message: 'Unsay nahitabo...naay giingon sila momords sa ila??', timestamp: '31 Jan 19' },
    { id: '6', name: 'John Lloyd Morden', handle: '@johnlloyd', message: 'Can we meet later for the project update?', timestamp: '05 Feb 20' },
    { id: '7', name: 'Emmanuel Redoble', handle: '@emmanuel', message: 'How are we progressing with the task?', timestamp: '20 Mar 20' },
    { id: '8', name: 'Allyn Kyle Cambaya', handle: '@allyn', message: 'I\'ll be free to work tomorrow!', timestamp: '15 Jul 19' },
    { id: '9', name: 'John Kenneth Pang-an', handle: '@johnken', message: 'Please send me the document for review.', timestamp: '09 Aug 19' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="search" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <View style={styles.userInfo}>
              <Image source={require('../../../assets/profile1.jpg')} style={styles.profilePic} /> 
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.handle}>{item.handle}</Text>
              </View>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    textAlign: 'center',
    flex: 1, 
  },
  notificationCard: {
    backgroundColor: '#1f1f1f', 
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  handle: {
    fontSize: 14,
    color: '#888',
  },
  timestamp: {
    fontSize: 12,
    color: '#888', 
    marginLeft: 10,
  },
  message: {
    fontSize: 16,
    color: '#ddd', 
    marginTop: 5,
  },
});

export default Inbox;
