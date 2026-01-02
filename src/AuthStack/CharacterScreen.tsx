import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CharacterScreen = ({ navigation }: any) => {
  const [selected, setSelected] = useState<'boy' | 'girl' | null>(null);

  const finishOnboarding = async () => {
    if (!selected) return;

    await AsyncStorage.multiSet([
      ['USER_ONBOARDED', 'true'],
      ['USER_CHARACTER', selected],
    ]);

    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Choose Your Trainer </Text>
        <Text style={styles.subtitle}>
          Select a character to begin your adventure!
        </Text>

        <View style={styles.trainerContainer}>
          {/* Boy */}
          <TouchableOpacity
            style={[
              styles.trainerCard,
              selected === 'boy' && styles.selectedCard,
            ]}
            onPress={() => setSelected('boy')}
          >
            <Image
              source={require('../assets/Pokemon/boy.png')}
              style={styles.trainerImage}
            />
            <Text style={styles.trainerText}>Timmy</Text>
          </TouchableOpacity>

          {/* Girl */}
          <TouchableOpacity
            style={[
              styles.trainerCard,
              selected === 'girl' && styles.selectedCard,
            ]}
            onPress={() => setSelected('girl')}
          >
            <Image
              source={require('../assets/Pokemon/girl.png')}
              style={styles.trainerImage}
            />
            <Text style={styles.trainerText}>Julli</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            !selected && { opacity: 0.5 },
          ]}
          onPress={finishOnboarding}
          disabled={!selected}
        >
          <Text style={styles.buttonText}>Let’s Go!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  trainerContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  trainerCard: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    height: 250,
    width: 150,
    backgroundColor: '#FFD580',
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#000',
  },
  trainerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  trainerText: {
    marginTop: 8,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
