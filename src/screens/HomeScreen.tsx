import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Pokédex</Text>
          <Text style={styles.subtitle}>Gotta Catch ’Em All! ⚡</Text>
        </View>

        {/* Hero Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          }}
          style={styles.heroImage}
        />

        {/* Cards */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>🔍 Explore Pokémon</Text>
            <Text style={styles.cardText}>
              Discover cute and powerful Pokémon
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>❤️ Favorites</Text>
            <Text style={styles.cardText}>
              Save the Pokémon you love
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>⚔️ Battles</Text>
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
    width: 160,
    height: 160,
    alignSelf: "center",
    marginVertical: 20,
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 5,
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
