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
            headerShown: false, // Globally hide all headers
            animation: 'none',  // Optional: Disable animations
          }}
        >
          {/* Intro screen */}
          <Stack.Screen name="intro" />

          {/* Login screen */}
          <Stack.Screen name="logIn" />

          {/* Registration screen */}
          <Stack.Screen
            name="register"
            options={{
              headerShown: false, // Re-enable header for this screen if needed
              title: 'Registration', 
            }}
          />

          {/* Forgot Password screen */}
          <Stack.Screen
            name="recover"
            options={{
              headerShown: false, // Re-enable header for this screen if needed
              title: 'Forgot Password?',
            }}
          />

          {/* Dashboard screen */}
          <Stack.Screen name="dashboard" />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;
