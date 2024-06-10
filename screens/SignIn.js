import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const SignIn = ({ navigation, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    axios.post('http://192.168.0.117:5000/signin', {
      email: email,
      password: password,
    })
    .then(response => {
      if (response.data.success) {
        onLogin(); // Update the login status
        navigation.navigate('Products'); // Navigate to the Products page
      } else {
        Alert.alert('Error', response.data.message);
      }
    })
    .catch(error => {
      console.error('Error during sign-in:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    });
  };

  return (
    <ImageBackground source={{ uri: 'https://th.bing.com/th/id/OIG1.dWcKAN0XJLAtaeKbWsoq?w=1024&h=1024&rs=1&pid=ImgDetMain' }} style={styles.background}>
      <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        <View style={styles.inputGroup}>
          <Icon name="envelope" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ddd"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputGroup}>
          <Icon name="lock" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.recover}>
          <Text style={styles.recoverText}>Recover Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.socialIcons}>
          <Icon name="google" size={30} color="#fff" style={styles.icon} />
          <Icon name="facebook" size={30} color="#fff" style={styles.icon} />
        </View>
        <View style={styles.links}>
          <Text style={styles.linkText}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    flex: 1,
    color: '#fff',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  recover: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  recoverText: {
    color: '#ddd',
  },
  button: {
    backgroundColor: '#ff6f61',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#fff',
    marginRight: 5,
  },
  signUpText: {
    color: '#ff6f61',
    fontWeight: 'bold',
  },
});

export default SignIn;
