import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const exploreData = [
  { id: "1", title: "Pikachu", icon: require("../assets/pokeicon/poke1.png") },
  { id: "2", title: "Charmander", icon: require("../assets/pokeicon/poke2.png") },
  { id: "3", title: "Bulbasaur", icon: require("../assets/pokeicon/poke3.png") },
  { id: "4", title: "Squirtle", icon: require("../assets/pokeicon/poke4.png") },
  { id: "5", title: "Jigglypuff", icon: require("../assets/pokeicon/poke5.png") },
  { id: "6", title: "Meowth", icon: require("../assets/pokeicon/poke6.png") },
  { id: "7", title: "Pidgey", icon: require("../assets/pokeicon/poke7.png") },
  { id: "8", title: "Eevee", icon: require("../assets/pokeicon/poke8.png") },
  { id: "9", title: "Snorlax", icon: require("../assets/pokeicon/poke9.png") },
  { id: "10", title: "Mewtwo", icon: require("../assets/pokeicon/poke10.png") },
  { id: "11", title: "Gengar", icon: require("../assets/pokeicon/poke11.png") },
  { id: "12", title: "Dragonite", icon: require("../assets/pokeicon/poke12.png") },    
  { id: "13", title: "Magikarp", icon: require("../assets/pokeicon/poke13.png") },
  { id: "14", title: "Lapras", icon: require("../assets/pokeicon/poke14.png") },
  { id: "15", title: "Vulpix", icon: require("../assets/pokeicon/poke15.png") },
  { id: "16", title: "Diglett", icon: require("../assets/pokeicon/poke16.png") },
  { id: "17", title: "Machop", icon: require("../assets/pokeicon/poke17.png") },
  { id: "18", title: "Psyduck", icon: require("../assets/pokeicon/poke18.png") },
  { id: "19", title: "Caterpie", icon: require("../assets/pokeicon/poke19.png") },
  { id: "20", title: "Weedle", icon: require("../assets/pokeicon/poke20.png") },
  { id: "21", title: "Weedle", icon: require("../assets/pokeicon/poke21.png") },
  { id: "22", title: "Weedle", icon: require("../assets/pokeicon/poke22.png") },
  { id: "23", title: "Weedle", icon: require("../assets/pokeicon/poke23.png") },
  { id: "24", title: "Weedle", icon: require("../assets/pokeicon/poke24.png") },
  { id: "25", title: "Weedle", icon: require("../assets/pokeicon/poke25.png") },
  { id: "26", title: "Weedle", icon: require("../assets/pokeicon/poke26.png") },
  { id: "27", title: "Weedle", icon: require("../assets/pokeicon/poke27.png") },
  { id: "28", title: "Weedle", icon: require("../assets/pokeicon/poke28.png") },
  { id: "29", title: "Weedle", icon: require("../assets/pokeicon/poke29.png") },
  { id: "30", title: "Weedle", icon: require("../assets/pokeicon/poke30.png") },
  { id: "31", title: "Weedle", icon: require("../assets/pokeicon/poke31.png") },
  { id: "32", title: "Weedle", icon: require("../assets/pokeicon/poke32.png") },
];

type ItemType = {
  id: string;
  title: string;
  icon: any;
};

const ExploreScreen = () => {
  const renderItem = ({ item }: { item: ItemType }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>

      <FlatList
        data={exploreData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 12,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f8fafc",
    marginBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#1e293b",
    margin: 6,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 8,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 14,
    color: "#e5e7eb",
    textAlign: "center",
  },
});
