import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../AuthStack/LoginScreen';
import SignupScreen from '../AuthStack/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../AuthStack/IntroScreen';
import CharacterScreen from '../AuthStack/CharacterScreen'; 

export type AuthStackParamList = {
  Intro: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Character: { name: string };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Character" component={CharacterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
