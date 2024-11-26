import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#1DA1F2', 
        tabBarInactiveTintColor: '#8899A6',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#000',
          borderTopWidth: 0, 
          elevation: 0, 
        },
        tabBarShowLabel: false, 
      }}
    >
    
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
          tabBarLabel: '', 
        }}
      />
   
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
