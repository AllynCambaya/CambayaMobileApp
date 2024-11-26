import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons

const AddPost = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    console.log('Post Content:', postContent);
    setPostContent('');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Create a New Post</Text>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* User Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../../assets/profile1.jpg')} // Replace with user's profile image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Allyn Cambaya</Text>
      </View>

      {/* Post Input Section */}
      <TextInput
        style={styles.input}
        placeholder="Express your thoughts..."
        placeholderTextColor="#aaa"
        value={postContent}
        onChangeText={setPostContent}
        multiline
      />

      {/* Options Section */}
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.option}>
          <Icon name="file-text" size={20} color="#fff" />
          <Text style={styles.optionText}>Blocos notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="font" size={20} color="#fff" />
          <Text style={styles.optionText}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="camera" size={20} color="#fff" />
          <Text style={styles.optionText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="video-camera" size={20} color="#fff" />
          <Text style={styles.optionText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="bar-chart" size={20} color="#fff" />
          <Text style={styles.optionText}>Poll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="link" size={20} color="#fff" />
          <Text style={styles.optionText}>Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Dark background
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: '#FFFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  postButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    color: '#fff',
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    textAlignVertical: 'top',
    fontSize: 14,
    height: 150,
  },
  optionsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  option: {
    alignItems: 'center',
    marginBottom: 30,
    width: '30%',
  },
  optionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default AddPost;
