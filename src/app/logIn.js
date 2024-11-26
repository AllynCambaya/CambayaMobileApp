import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const LogInPage = () => {
  const router = useRouter(); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

 
  const handleSignIn = () => {
    if (email.trim() && password.trim()) {
      
      router.push('dashboard');
    } else {
      
      alert('Please enter your email and password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <Image source={require('../assets/logo2.png')} style={styles.logo} />

 
      <Text style={styles.title}>Login</Text>

     
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        value={email} 
        onChangeText={(text) => setEmail(text)} 
        outlineColor="#FFF"
        activeOutlineColor="#FFF"
        textColor="#FFF"
        placeholderTextColor="#FFF"
        autoCapitalize="none" 
      />


      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        value={password} 
        onChangeText={(text) => setPassword(text)} 
        outlineColor="#FFF"
        activeOutlineColor="#FFF"
        textColor="#FFF"
        placeholderTextColor="#FFF"
      />

   
      <Button
        mode="contained"
        style={styles.loginButton}
        labelStyle={{ color: '#000' }}
        onPress={handleSignIn} 
      >
        Login
      </Button>

   
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => router.push('register')}
        >
          Sign Up
        </Text>
      </Text>

    
      <Text style={styles.footerText}>
        Forgot Password?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => router.push('recover')} 
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
    backgroundColor: '#000', 
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
    backgroundColor: '#000', 
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FFF', 
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
