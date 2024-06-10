import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Products from './screens/Products';
import ProductDetails from './screens/ProductDetails';
import BookingFormScreen from './screens/BookingFormScreen';
import RateUsScreen from './screens/RateUsScreen';
import useBackHandlerWithRating from './hooks/useBackHandlerWithRating';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useBackHandlerWithRating(isLoggedIn);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'SignIn'} screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products">
              {props => <Products {...props} onLogout={handleLogout} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="BookingFormScreen" component={BookingFormScreen} />
            <Stack.Screen name="RateUs" component={RateUsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn">
              {props => <SignIn {...props} onLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
