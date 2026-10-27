import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotScreen({ navigation }: any) {
  const [email, setEmail] = useState('');

  function resetPassword() {
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Error', 'Дұрыс Email енгіз!');
      return;
    }

    Alert.alert(
      'Request received',
      'Қалпына келтіру функциясына сервер қосу қажет.'
    );
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#8D1B78" />
        </TouchableOpacity>

        <Ionicons
          name="lock-closed-outline"
          size={65}
          color="#8D1B78"
          style={{ alignSelf: 'center', marginTop: 65 }}
        />

        <Text style={s.title}>Forgot Password?</Text>

        <Text style={s.subtitle}>
          Enter your email address to request a password reset.
        </Text>

        <TextInput
          style={s.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={s.button}
          onPress={resetPassword}
        >
          <Text style={s.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  content: { flex: 1, padding: 25 },
  title: {
    fontSize: 24, fontWeight: 'bold',
    textAlign: 'center', marginTop: 25,
  },
  subtitle: {
    color: '#888', textAlign: 'center',
    marginTop: 12, marginBottom: 25,
  },
  input: {
    height: 48, borderWidth: 1,
    borderColor: '#DDD', borderRadius: 7,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#8D1B78', height: 48,
    borderRadius: 7, justifyContent: 'center',
    alignItems: 'center', marginTop: 20,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});