import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Header, Button, Icon, AirbnbRating } from 'react-native-elements';

const RateUsScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  const submitRating = () => {
    if (rating === 0) {
      Alert.alert('Error', 'Please select a rating before submitting.');
      return;
    }

    Alert.alert('Thank You!', 'Thank you for your feedback.', [
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <Icon
            name='arrow-back'
            color='#fff'
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={{ text: 'Rate Us', style: styles.headerTitle }}
        containerStyle={{
          backgroundColor: '#2089dc',
          justifyContent: 'space-around',
        }}
      />
      <View style={styles.contentContainer}>
        <AirbnbRating
          count={5}
          defaultRating={0}
          size={30}
          onFinishRating={setRating}
        />
        <Button
          title="Submit Rating"
          buttonStyle={styles.submitButton}
          onPress={submitRating}
        />
      </View>
    </View>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  submitButton: {
    backgroundColor: '#2089dc',
    marginTop: 20,
    width: '100%',
  },
});

export default RateUsScreen;
