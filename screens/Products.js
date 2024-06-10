import React, { useEffect, useState, useRef } from 'react';
import { FlatList, StyleSheet, View, Alert, Animated } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';

const Products = ({ navigation, onLogout }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.0.117:5000/rooms');
        if (response.data.success) {
          const fetchedProducts = response.data.rooms.map(room => ({
            id: room.id,
            name: room.roomName,
            category: room.category,
            price: room.oneDayRent,
            image: room.image,
            reviews: room.reviews, // Assuming you have reviews data
            about: room.about,
          }));
          setProducts(fetchedProducts);
          setFilteredProducts(fetchedProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (query, category) => {
    let filteredList = products;

    if (query) {
      filteredList = filteredList.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== 'All') {
      filteredList = filteredList.filter(product => product.category === category);
    }

    setFilteredProducts(filteredList);
  };

  const handleLogoutPress = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: onLogout,
      },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <LottieView
          source={require('../assets/loading.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <Icon
            name='arrow-back'
            color={'#fff'}
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={{ text: 'All Products', style: styles.header }}
        rightComponent={
          <Icon
            name='logout'
            color={'#fff'}
            onPress={handleLogoutPress}
          />
        }
        containerStyle={styles.headerContainer}
      />
      <SearchBar
        placeholder="Search by name..."
        onChangeText={handleSearch}
        value={searchQuery}
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
      />
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => handleFilter(itemValue)}
      >
        <Picker.Item label="All Categories" value="All" />
        <Picker.Item label="Single Room" value="Single Room" />
        <Picker.Item label="1BHK" value="1BHK" />
        <Picker.Item label="2BHK" value="2BHK" />
        {/* Add more categories as needed */}
      </Picker>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <ProductCard product={item} />
          </View>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#ff6f61', // Changed color
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchInputContainer: {
    backgroundColor: '#dfe6e9',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  list: {
    padding: 10,
  },
  productCard: {
    marginBottom: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Products;
