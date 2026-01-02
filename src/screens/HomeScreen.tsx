import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [character, setCharacter] = useState<'boy' | 'girl' | null>(null);

  useEffect(() => {
    const loadCharacter = async () => {
      const savedCharacter = await AsyncStorage.getItem('USER_CHARACTER');
      if (savedCharacter === 'boy' || savedCharacter === 'girl') {
        setCharacter(savedCharacter);
      }
    };

    loadCharacter();
  }, []);

  const getCharacterImage = () => {
    if (character === 'boy') {
      return require('../assets/Pokemon/boy.png');
    }
    if (character === 'girl') {
      return require('../assets/Pokemon/girl.png');
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Pokédex</Text>
          <Text style={styles.subtitle}>Gotta Catch ’Em All!</Text>
        </View>

        {/* Trainer Image */}
        {character && (
          <Image
            source={getCharacterImage()!}
            style={styles.heroImage}
          />
        )}

        {/* Cards */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}> Explore Pokémon</Text>
            <Text style={styles.cardText}>
              Discover cute and powerful Pokémon
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}> Favorites</Text>
            <Text style={styles.cardText}>
              Save the Pokémon you love
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}> Battles</Text>
            <Text style={styles.cardText}>
              Learn Pokémon powers & moves
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF3D3D",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFE6E6",
    marginTop: 5,
  },
  heroImage: {
    width: 100,
    height: 230,
    alignSelf: "center",
    marginVertical: 20,
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#ffffffe3",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 5,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
});
