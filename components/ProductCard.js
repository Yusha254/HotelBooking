// ProductCard.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  const handleAddToCart = () => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>${product.price}/night</Text>
      <Button
        icon={{
          name: 'cart-plus',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        buttonStyle={styles.button}
        title="View Details"
        onPress={handleAddToCart}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    marginBottom: 5,
    color: 'grey',
  },
  price: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6f61',
    borderRadius: 0,
  },
});

export default ProductCard;