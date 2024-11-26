import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

    
      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>lex macasusi</Text>
          <Icon name="ellipsis-v" size={18} color="#fff" />
        </View>
        <Text style={styles.notificationText}>
          sza pinoy kween KASI NAKA JISULIFE CTFUUUUUUU??????
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="camera" size={20} color="#FF4B5C" />
        </View>
      </View>

    
      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>NBA is LIVE</Text>
        </View>
        <Text style={styles.notificationText}>
          Jokic Warmup Before DAL-DEN on ESPN
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="video-camera" size={20} color="#FF4B5C" />
        </View>
      </View>

  
      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>NBA is LIVE</Text>
        </View>
        <Text style={styles.notificationText}>
          Towns Warmup Ahead of NYK-PHX on ESPN
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="video-camera" size={20} color="#FF4B5C" />
        </View>
      </View>

     
      
   
      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>NBA is LIVE</Text>
        </View>
        <Text style={styles.notificationText}>
          Darius Garland Warmup Before CLE-BOS
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="video-camera" size={20} color="#FF4B5C" />
        </View>
      </View>


      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>NBA is LIVE</Text>
        </View>
        <Text style={styles.notificationText}>
          WEMBY, LEBRON Warm Up!
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="video-camera" size={20} color="#FF4B5C" />
        </View>
      </View>


      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>Anime News Network</Text>
        </View>
        <Text style={styles.notificationText}>
          A Letter from the Executive Editor
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="newspaper-o" size={20} color="#FF4B5C" />
        </View>
      </View>

    
      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>NBA is LIVE</Text>
        </View>
        <Text style={styles.notificationText}>
          Watch Anthony Edwards Warm Up Ahead of MIN-CHI
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="video-camera" size={20} color="#FF4B5C" />
        </View>
      </View>

 
      <View style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Text style={styles.username}>NBA is LIVE</Text>
        </View>
        <Text style={styles.notificationText}>
          Watch Steph Curry Warm Up Ahead of GSW-BOS
        </Text>
        <View style={styles.notificationFooter}>
          <Icon name="video-camera" size={20} color="#FF4B5C" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  notificationItem: {
    marginBottom: 15,
    backgroundColor: '#1C1C1C',
    padding: 15,
    borderRadius: 8,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    color: '#FF4B5C', // Bright color for username (similar to the image)
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  notificationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Notifications;
