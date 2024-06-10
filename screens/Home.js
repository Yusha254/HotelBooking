import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const rooms = [
  { id: '1', name: 'Luxury Suite', image: 'https://example.com/room1.jpg' },
  { id: '2', name: 'Executive Room', image: 'https://example.com/room2.jpg' },
  // Add more rooms as needed
];

const HomePage = ({ navigation }) => {
  const renderRoom = ({ item }) => (
    <TouchableOpacity style={styles.roomCard} onPress={() => navigation.navigate('RoomDetails', { roomId: item.id })}>
      <ImageBackground source={{ uri: item.image }} style={styles.roomImage}>
        <View style={styles.roomOverlay}>
          <Text style={styles.roomName}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: 'https://th.bing.com/th/id/OIG1.wf_2VUAZ8TwdI8dVxjsn?pid=ImgGn' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to LuxStay</Text>
        <Text style={styles.subtitle}>Find your perfect room</Text>
        <FlatList
          data={rooms}
          renderItem={renderRoom}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.roomList}
        />
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
  roomList: {
    alignItems: 'center',
  },
  roomCard: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  roomImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  roomOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  roomName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;
