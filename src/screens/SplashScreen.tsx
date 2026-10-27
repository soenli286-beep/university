import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={s.container}>
      <View style={s.logo}>
        <Ionicons name="school-outline" size={48} color="white" />
      </View>
      <Text style={s.title}>Superior University</Text>
      <Text style={s.subtitle}>e-Learning Platform</Text>
      <Text style={s.copyright}>Copyright © 2026 Superior University</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D1B78',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  subtitle: { color: '#F0D5EA', marginTop: 8 },
  copyright: {
    position: 'absolute',
    bottom: 35,
    color: 'white',
    fontSize: 10,
  },
});