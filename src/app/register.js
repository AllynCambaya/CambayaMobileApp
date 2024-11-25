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
  const [showDialog, setShowDialog] = useState(false); // Modal visibility state

  // Function to handle sign-up
  const handleSignUp = () => {
    // You can add validation logic here (e.g., check if passwords match, fields are filled)
    setShowDialog(true); // Show the success dialog
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo2.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Input Fields */}
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

      {/* Sign-Up Button */}
      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.signUpButton}
        labelStyle={styles.buttonText}
      >
        Sign Up
      </Button>

      {/* Forgot Password */}
      <Text
        style={styles.forgotPassword}
        onPress={() => console.log('Navigate to Forgot Password')}
      >
        Forgot your password? Click Here
      </Text>

      {/* Success Dialog */}
      <Modal
        transparent={true}
        visible={showDialog}
        animationType="slide"
        onRequestClose={() => setShowDialog(false)} // Close dialog on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Account created successfully!</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setShowDialog(false)} // Close dialog on button press
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
    backgroundColor: '#000000', // Black background
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
    color: '#FFFFFF', // White text
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#1c1c1c', // Dark background for inputs
    marginBottom: 15,
    color: '#FFFFFF', // White text
  },
  signUpButton: {
    backgroundColor: '#FFFFFF', // White button
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000', // Black text for button
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
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
