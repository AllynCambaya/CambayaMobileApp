import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const IntroScreen = () => {
  const router = useRouter();
  const [fadeAnim] = useState(new Animated.Value(1)); // Start with full opacity

  // Load the Poppins font
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    // Fade-out animation and navigate to login after 3 seconds
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000, // 1-second fade-out
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        router.push('logIn'); // Navigate to login
      }, 1000); // Wait for the fade-out to finish
    }, 3000); // Initial 3-second delay

    return () => clearTimeout(timer); // Cleanup timer
  }, [fadeAnim, router]);

  if (!fontsLoaded) {
    return null; // Ensure fonts are loaded before rendering
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require('../assets/logo2.png')} // Path to your logo
        style={[styles.logo, { opacity: fadeAnim }]} // Apply fade animation
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        {/* Add optional text here if needed */}
      </Animated.Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Changed to black
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 50,
    color: '#FFF', // Keep text white for contrast against black background
    fontFamily: 'Poppins_700Bold',
  },
});

export default IntroScreen;
