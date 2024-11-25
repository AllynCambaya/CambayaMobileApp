import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const LogInPage = () => {
  const router = useRouter(); // Router to handle navigation
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

  // Handle Login
  const handleSignIn = () => {
    if (email.trim() && password.trim()) {
      // Navigate to dashboard if fields are filled
      router.push('dashboard');
    } else {
      // Alert if fields are empty
      alert('Please enter your email and password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo2.png')} style={styles.logo} />

      {/* Login Text */}
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        value={email} // Bind value to state
        onChangeText={(text) => setEmail(text)} // Update state on change
        outlineColor="#FFF"
        activeOutlineColor="#FFF"
        textColor="#FFF"
        placeholderTextColor="#FFF"
        autoCapitalize="none" // Disable capitalization
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        value={password} // Bind value to state
        onChangeText={(text) => setPassword(text)} // Update state on change
        outlineColor="#FFF"
        activeOutlineColor="#FFF"
        textColor="#FFF"
        placeholderTextColor="#FFF"
      />

      {/* Login Button */}
      <Button
        mode="contained"
        style={styles.loginButton}
        labelStyle={{ color: '#000' }}
        onPress={handleSignIn} // Trigger login function
      >
        Login
      </Button>

      {/* Sign Up Link */}
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => router.push('register')} // Navigate to Register
        >
          Sign Up
        </Text>
      </Text>

      {/* Forgot Password Link */}
      <Text style={styles.footerText}>
        Forgot Password?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => router.push('recover')} // Navigate to Recover
        >
          Click Here
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#000', // Match background color
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FFF', // White button with black text
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
  },
  signUpLink: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default LogInPage;
