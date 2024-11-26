import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false, 
            animation: 'none', 
          }}
        >
     
          <Stack.Screen name="intro" />


          <Stack.Screen name="logIn" />

 
          <Stack.Screen
            name="register"
            options={{
              headerShown: false, 
              title: 'Registration', 
            }}
          />

     
          <Stack.Screen
            name="recover"
            options={{
              headerShown: false, 
              title: 'Forgot Password?',
            }}
          />

    
          <Stack.Screen name="dashboard" />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;
