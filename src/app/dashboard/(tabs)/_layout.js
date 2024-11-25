import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // This removes the header for all screens
        tabBarActiveTintColor: '#1DA1F2', // Active icon color
        tabBarInactiveTintColor: '#8899A6', // Inactive icon color
        tabBarStyle: {
          height: 60,
          backgroundColor: '#000', // Black background for the tab bar
          borderTopWidth: 0, // No border for a cleaner look
          elevation: 0, // No shadow
        },
        tabBarShowLabel: false, // Minimalist design with no labels
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
      {/* Projects Screen */}
      <Tabs.Screen
        name="project"
        options={{
          title: 'Projects',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bell"
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
      {/* Add Button */}
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="plus"
              size={28}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
          tabBarLabel: '', // Hide label for the add button
        }}
      />
      {/* Inbox Screen */}
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'envelope' : 'envelope-o'}
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
      {/* Profile Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'user' : 'user-o'}
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
