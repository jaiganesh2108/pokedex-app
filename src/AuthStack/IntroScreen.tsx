import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IntroScreen = ({ navigation }: any) => {
  // Animation values
  const mainScale = useRef(new Animated.Value(0.6)).current;
  const mainTranslateY = useRef(new Animated.Value(40)).current;
  const leftTranslateX = useRef(new Animated.Value(-120)).current;
  const rightTranslateX = useRef(new Animated.Value(120)).current;
  const grassTranslateY = useRef(new Animated.Value(120)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(mainScale, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(mainTranslateY, {
        toValue: 0,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(leftTranslateX, {
        toValue: 0,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(rightTranslateX, {
        toValue: 0,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(grassTranslateY, {
        toValue: 0,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Main Screen */}
      <SafeAreaView style={styles.safeContainer}>
        {/* Blue Middle Section */}
        <View style={styles.skySection}>
          <View style={styles.pokemonContainer}>
            <Animated.Image
              source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png' }}
              style={[styles.sidePokemonLeft, { transform: [{ translateX: leftTranslateX }] }]}
              resizeMode="contain"
            />
            <Animated.Image
              source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' }}
              style={[styles.mainPokemon, { transform: [{ scale: mainScale }, { translateY: mainTranslateY }] }]}
              resizeMode="contain"
            />
            <Animated.Image
              source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png' }}
              style={[styles.sidePokemonRight, { transform: [{ translateX: rightTranslateX }] }]}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Orange Bottom Section */}
        <Animated.View style={[styles.grassSection, { transform: [{ translateY: grassTranslateY }] }]}>
          <Animated.View style={{ opacity: contentOpacity, alignItems: 'center' }}>
            <Text style={styles.title}>Hello Trainer</Text>
            <Text style={styles.subtitle}>Welcome to the world of Pokémon!</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace('Signup')}
            >
              <Text style={styles.buttonText}>Start Adventure</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1E90FF', 
  },
  skySection: { 
    flex: 2, 
    justifyContent: 'flex-end',
    backgroundColor: 'transparent', 
  },
  pokemonContainer: { 
    height: 320, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    position: 'relative' 
  },
  mainPokemon: {
    position: 'absolute',
    width: 260,
    height: 260,
    bottom: -40,
    zIndex: 20,
    borderRadius: 130,
  },
  sidePokemonLeft: {
    position: 'absolute',
    width: 180,
    height: 180,
    left: -10,
    bottom: -10,
    transform: [{ scale: 0.85 }],
    borderRadius: 90,
  },
  sidePokemonRight: {
    position: 'absolute',
    width: 160,
    height: 160,
    right: -10,
    bottom: -10,
    transform: [{ scale: 0.85 }],
    borderRadius: 80,
  },
  grassSection: {
    flex: 1,
    backgroundColor: '#FFA500',
    paddingTop: 90,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    marginTop: -60,
    zIndex: 3,
    elevation: 3,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#FFF', 
    marginBottom: 8, 
    textShadowColor: 'rgba(0,0,0,0.25)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#FFF', 
    marginBottom: 22, 
    opacity: 0.95, 
    textAlign: 'center' 
  },
  button: { 
    backgroundColor: '#1E90FF', 
    paddingHorizontal: 40, 
    paddingVertical: 16, 
    borderRadius: 40, 
    elevation: 10 
  },
  buttonText: { 
    color: '#FFF', 
    fontWeight: '800', 
    fontSize: 18 
  },
});
