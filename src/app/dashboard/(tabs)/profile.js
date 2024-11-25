import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons library

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isPinEnabled, setIsPinEnabled] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleNotifications = () => setIsNotificationsEnabled((prev) => !prev);
  const togglePin = () => setIsPinEnabled((prev) => !prev);

  const themeStyles = isDarkMode ? darkThemeStyles : lightThemeStyles;

  return (
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Profile Picture */}
        <Image
          source={require("../../../assets/profile.jpg")} // Replace with your image path
          style={styles.profileImage}
        />

        {/* Name and Email */}
        <Text style={[styles.nameText, themeStyles.text]}>Allyn Cambaya</Text>
        <Text style={[styles.emailText, themeStyles.text]}>allyncambaya2003@gmail.com</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Follow Requests */}
        <TouchableOpacity style={[styles.sectionButton, themeStyles.card]}>
          <Icon name="people" size={24} color={themeStyles.text.color} />
          <Text style={[styles.sectionText, themeStyles.text]}>Follow Requests</Text>
          <View style={[styles.notificationBadge, styles.rightAlign]}>
            <Text style={styles.notificationBadgeText}>2</Text>
          </View>
        </TouchableOpacity>

        {/* Settings Section */}
        <TouchableOpacity style={[styles.sectionButton, themeStyles.card]}>
          <Icon name="settings" size={24} color={themeStyles.text.color} />
          <Text style={[styles.sectionText, themeStyles.text]}>Settings</Text>
        </TouchableOpacity>

        {/* Notification Toggle */}
        <View style={[styles.switchRow, themeStyles.card]}>
          <Icon name="notifications" size={24} color={themeStyles.text.color} />
          <Text style={[styles.switchLabel, themeStyles.text]}>Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ true: "#4CAF50", false: "#e0e0e0" }}
            thumbColor={isNotificationsEnabled ? "#ffffff" : "#f4f4f4"}
          />
        </View>

        {/* Dark Mode Toggle */}
        <View style={[styles.switchRow, themeStyles.card]}>
          <Icon name="moon" size={24} color={themeStyles.text.color} />
          <Text style={[styles.switchLabel, themeStyles.text]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ true: "#4CAF50", false: "#e0e0e0" }}
            thumbColor={isDarkMode ? "#ffffff" : "#f4f4f4"}
          />
        </View>

        {/* PIN Code Toggle */}
        <View style={[styles.switchRow, themeStyles.card]}>
          <Icon name="lock-closed" size={24} color={themeStyles.text.color} />
          <Text style={[styles.switchLabel, themeStyles.text]}>PIN Code</Text>
          <Switch
            value={isPinEnabled}
            onValueChange={togglePin}
            trackColor={{ true: "#4CAF50", false: "#e0e0e0" }}
            thumbColor={isPinEnabled ? "#ffffff" : "#f4f4f4"}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  emailText: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  editProfileText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionButton: {
    flexDirection: "row",
    alignItems: "center", // Align icon and text horizontally and centered vertically
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff',
    marginLeft: 8, // Reduced margin between icon and text
  },
  notificationBadge: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  notificationBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  rightAlign: {
    position: 'absolute',
    right: 20, // Aligns the badge to the right
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center", // Align icon and text horizontally and centered vertically
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "space-between", // Ensures switch is aligned to the right
  },
  switchLabel: {
    fontSize: 16,
    marginLeft: 8, // Reduced margin between icon and text
  },
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    flexDirection: "row", // Align icon and text horizontally
    justifyContent: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8, // Reduced margin between icon and text
  },
});

const lightThemeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
  },
  text: {
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});

const darkThemeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#000", // Black background for dark mode
  },
  text: {
    color: "#fff", // White text color for dark mode
  },
  card: {
    backgroundColor: "#333", // Darker card background to contrast with black
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Profile;
