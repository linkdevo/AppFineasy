import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const goToExampleScreen = () => {
    navigation.navigate('Example')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={goToExampleScreen}>
          <Text style={styles.buttonText}>EXAMPLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <TouchableOpacity style={styles.profilePicture}>
          <Image
            source={require('../../assets/profile.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerMenu}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Alexandre Link</Text>
          <Text style={styles.squad}>Time de Canais</Text>
        </View>
        <View style={styles.menuItems}>
          <TouchableOpacity style={[styles.checkInButton, styles.centerButton]}>
            <Text style={styles.checkInButtonText}>Check-in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.checkOutButton, styles.centerButton]}>
            <Text style={styles.checkOutButtonText}>Check-out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4B548',
    opacity: 0.9,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#A4B548',
    opacity: 0.9,
  },
  button: {
    backgroundColor: '#51C1C5',
    padding: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  profile: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 16,
  },
  profilePicture: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  containerMenu: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 16,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  squad: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  checkInButton: {
    backgroundColor: '#A4B548',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
  },
  checkInButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  checkOutButton: {
    backgroundColor: '#ed574a',
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  checkOutButtonText: {
    color: '#333',
    fontSize: 16,
  },
  menuItems: {
    marginTop: 16,
  },
  centerButton: {
    alignSelf: 'center',
  },
});