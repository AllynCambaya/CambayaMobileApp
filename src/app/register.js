import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDialog, setShowDialog] = useState(false); 

 
  const handleSignUp = () => {
   
    setShowDialog(true); 
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo2.png')} style={styles.logo} />
      </View>

      
      <Text style={styles.title}>Sign Up</Text>

      
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      
      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.signUpButton}
        labelStyle={styles.buttonText}
      >
        Sign Up
      </Button>

  
      <Text
        style={styles.forgotPassword}
        onPress={() => console.log('Navigate to Forgot Password')}
      >
        Forgot your password? Click Here
      </Text>

    
      <Modal
        transparent={true}
        visible={showDialog}
        animationType="slide"
        onRequestClose={() => setShowDialog(false)} 
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Account created successfully!</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setShowDialog(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF', 
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#1c1c1c', 
    marginBottom: 15,
    color: '#FFFFFF', 
  },
  signUpButton: {
    backgroundColor: '#FFFFFF', 
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000', 
  },
  forgotPassword: {
    color: '#FFFFFF',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Register;
