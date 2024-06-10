import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Header, Input, Button, Icon } from 'react-native-elements';

const BookingFormScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const [roomCode, setRoomCode] = useState(product.id);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [numDays, setNumDays] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const validateAndSubmit = () => {
    if (!fromDate || !toDate || !numDays || !totalAmount || !nationalID || !customerName || !mobileNumber) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Submit the booking details
    // For now, just show an alert
    Alert.alert('Booking Successful', 'Your booking has been submitted. Payment to be made on arrival', [
      {
        text: 'Rate Us',
        onPress: () => navigation.navigate('RateUs')
      },
      {
        text: 'No, Thanks',
        style: 'cancel',
        onPress: () => navigation.goBack()
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftComponent={
          <Icon 
            name='arrow-back' 
            color='#fff' 
            onPress={() => navigation.goBack()} 
          />
        }
        centerComponent={{ text: 'Booking Form', style: styles.headerTitle }}
        containerStyle={{
          backgroundColor: '#2089dc',
          justifyContent: 'space-around',
        }}
      />

      <View style={styles.formContainer}>
        <Input
          label="Selected Room Name"
          value={roomCode}
          disabled
        />
        <Input
          label="From Date"
          placeholder="YYYY-MM-DD"
          value={fromDate}
          onChangeText={setFromDate}
        />
        <Input
          label="To Date"
          placeholder="YYYY-MM-DD"
          value={toDate}
          onChangeText={setToDate}
        />
        <Input
          label="Number of Days"
          value={numDays}
          onChangeText={setNumDays}
          keyboardType="numeric"
        />
        <Input
          label="Total Amount to be Paid"
          value={totalAmount}
          onChangeText={setTotalAmount}
          keyboardType="numeric"
        />
        <Input
          label="Customer National ID"
          value={nationalID}
          onChangeText={setNationalID}
        />
        <Input
          label="Customer Name"
          value={customerName}
          onChangeText={setCustomerName}
        />
        <Input
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />

        <Button
          title="Submit Booking"
          buttonStyle={styles.submitButton}
          onPress={validateAndSubmit}
        />
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 15,
  },
  submitButton: {
    backgroundColor: '#2089dc',
    marginTop: 20,
  },
});

export default BookingFormScreen;
