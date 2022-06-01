// mengumpulkan semua screen yg dimiliki menggunakan
// stack navigator

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login, Register, WelcomeAuth} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer initialRouteName="Splash">
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeAuth"
          component={WelcomeAuth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
