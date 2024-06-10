// ProductDetails.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Header
        leftComponent={
          <Icon 
            name='arrow-back' 
            color='#000' 
            onPress={() => navigation.goBack()} 
          />
        }
        centerComponent={{ text: 'Product Details', style: styles.headerTitle }}
        rightComponent={
          <Icon 
            name='bookmark-outline' 
            type='material-community' 
            color='#000' 
          />
        }
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
        }}
      />

      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{product.category}</Text>
        <Text style={styles.price}>${product.price}/night</Text>
        <Button
          title="BOOK NOW"
          buttonStyle={styles.bookButton}
          titleStyle={styles.bookButtonTitle}
          onPress={() => navigation.navigate('BookingFormScreen', { product })}
        />

        <Text style={styles.sectionTitle}>Facilities</Text>
        <View style={styles.facilitiesContainer}>
          <View style={styles.facility}>
            <Text style={styles.facilityText}>2 Guests</Text>
          </View>
          <View style={styles.facility}>
            <Text style={styles.facilityText}>2 Bed</Text>
          </View>
          <View style={styles.facility}>
            <Text style={styles.facilityText}>2 Bath</Text>
          </View>
        </View>

        <View style={styles.amenitiesContainer}>
          <View style={styles.amenity}>
            <Icon name='wifi' type='font-awesome' color='#000' />
            <Text style={styles.amenityText}>Wi-Fi</Text>
          </View>
          <View style={styles.amenity}>
            <Icon name='tv' type='font-awesome' color='#000' />
            <Text style={styles.amenityText}>TV</Text>
          </View>
          <View style={styles.amenity}>
            <Icon name='car' type='font-awesome' color='#000' />
            <Text style={styles.amenityText}>Free Parking</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          {product.about}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bookButton: {
    backgroundColor: '#0000ff',
    borderRadius: 5,
  },
  bookButtonTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  facility: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
  },
  facilityText: {
    fontSize: 14,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  amenity: {
    alignItems: 'center',
  },
  amenityText: {
    fontSize: 14,
    marginTop: 5,
  },
  aboutText: {
    fontSize: 14,
    color: 'grey',
  },
});

export default ProductDetails;
