import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const CharacterScreen = ({ navigation, route }: any) => {
  const { name } = route.params;

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('USER_ONBOARDED', 'true');
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose Your Trainer</Text>
      <Text style={styles.subtitle}>Welcome, {name}!</Text>

      <Image
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={finishOnboarding}>
        <Text style={styles.buttonText}>Let’s Go! 🎉</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
