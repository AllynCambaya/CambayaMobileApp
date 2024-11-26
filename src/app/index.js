import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const IntroScreen = () => {
  const router = useRouter();
  const [fadeAnim] = useState(new Animated.Value(1)); 


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000, 
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        router.push('logIn'); 
      }, 1000); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [fadeAnim, router]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require('../assets/logo2.png')} 
        style={[styles.logo, { opacity: fadeAnim }]} 
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
       
      </Animated.Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', 
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 50,
    color: '#FFF', 
    fontFamily: 'Poppins_700Bold',
  },
});

export default IntroScreen;
