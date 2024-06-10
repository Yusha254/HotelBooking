// hooks/useBackHandlerWithRating.js
import { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import rate, { AndroidMarket } from 'react-native-rate';

const useBackHandlerWithRating = (isLoggedIn) => {
  useEffect(() => {
    const handleBackPress = () => {
      if (!isLoggedIn) {
        return false; // Default back button behavior if not logged in
      }

      Alert.alert('Rate Us', 'Would you like to rate our app?', [
        {
          text: 'No',
          onPress: () => BackHandler.exitApp(),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => rateApp() },
      ]);
      return true; // Prevent the default back button behavior
    };

    const rateApp = () => {
      const options = {
        AppleAppID: '2193813192',
        GooglePackageName: 'com.myapp',
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: false,
        openAppStoreIfInAppFails: true,
        fallbackPlatformURL: 'https://myapp.com',
      };
      rate(options, (success) => {
        if (success) {
          BackHandler.exitApp();
        }
      });
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [isLoggedIn]);
};

export default useBackHandlerWithRating;
