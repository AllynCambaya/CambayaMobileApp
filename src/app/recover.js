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

const Recover = ({ navigation }) => {
  const [email, setEmail] = useState(''); // Email state
  const [showDialog, setShowDialog] = useState(false); // Modal visibility state

  const handleSendLink = () => {
    setShowDialog(true); // Show the success dialog
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo2.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Password Recovery</Text>

      {/* Input Fields */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Send Recovery Link Button */}
      <Button
        mode="contained"
        onPress={handleSendLink}
        style={styles.resetButton}
        labelStyle={styles.buttonText}
      >
        Send Recovery Link
      </Button>

      {/* Back to Sign Up */}
      <Text
        style={styles.backText}
        onPress={() => navigation.navigate('SignUp')}
      >
        Back to Sign Up
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
            <Text style={styles.modalText}>Recovery link sent!</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000', // Black background
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  circleContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#1c1c1c',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  resetButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
  },
  backText: {
    color: '#FFFFFF',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
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

export default Recover;
