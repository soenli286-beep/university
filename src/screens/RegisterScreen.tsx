import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function register() {
    if (!username.trim() || !email.trim() || !password || !confirm) {
      Alert.alert('Error', 'Барлық өрісті толтыр!');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Email дұрыс емес!');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Құпиясөз кемінде 6 таңба болсын!');
      return;
    }

    if (password !== confirm) {
      Alert.alert('Error', 'Құпиясөздер сәйкес емес!');
      return;
    }

    Alert.alert('Success', 'Форма тексерілді!');
    navigation.replace('Main');
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={26} color="#8D1B78" />
      </TouchableOpacity>

      <Text style={s.title}>Create Account</Text>

      <TextInput
        style={s.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={s.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={s.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={s.input}
        placeholder="Re-type Password"
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
      />

      <TouchableOpacity style={s.button} onPress={register}>
        <Text style={s.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={s.footer}>
        Already have an account?
      </Text>

      <Text
        style={s.link}
        onPress={() => navigation.navigate('Login')}
      >
        Sign in
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  content: { padding: 25, paddingTop: 35 },
  title: {
    fontSize: 25,
    color: '#8D1B78',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 35,
  },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    marginBottom: 18,
  },
  button: {
    height: 48,
    backgroundColor: '#8D1B78',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  footer: { textAlign: 'center', color: '#888', marginTop: 25 },
  link: {
    textAlign: 'center',
    color: '#8D1B78',
    marginTop: 10,
    fontWeight: 'bold',
  },
});