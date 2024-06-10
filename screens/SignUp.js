import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !repeatPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    axios.post('http://192.168.0.117:5000/signup', {
      fName: firstName,
      lName: lastName,
      email: email,
      password: password,
    })
    .then(response => {
      if (response.data.success) {
        Alert.alert('Success', response.data.message);
        navigation.navigate('SignIn');
      } else {
        Alert.alert('Error', response.data.message);
      }
    })
    .catch(error => {
      console.error('Error during sign-up:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    });
  };

  return (
    <ImageBackground source={{ uri: 'https://th.bing.com/th/id/OIG1.wf_2VUAZ8TwdI8dVxjsn?pid=ImgGn' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputGroup}>
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#ddd"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputGroup}>
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#ddd"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
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
        <View style={styles.inputGroup}>
          <Icon name="lock" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            placeholderTextColor="#ddd"
            secureTextEntry
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />
        </View>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.socialIcons}>
          <Icon name="google" size={30} color="#fff" style={styles.icon} />
          <Icon name="facebook" size={30} color="#fff" style={styles.icon} />
        </View>
        <View style={styles.links}>
          <Text style={styles.linkText}>Already have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
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

export default SignUp;
