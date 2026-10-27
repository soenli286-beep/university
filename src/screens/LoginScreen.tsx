import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, SafeAreaView
} from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Барлық өрісті толтыр!');
      return;
    }

    navigation.replace('Main');
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.content}>
        <Text style={s.title}>Welcome Back!</Text>
        <Text style={s.subtitle}>Sign in to continue!</Text>

        <TouchableOpacity
          style={s.social}
          onPress={() => Alert.alert('Google', 'Google авторизациясы әлі қосылмаған.')}
        >
          <Text>🌐  Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.social}
          onPress={() => Alert.alert('Facebook', 'Facebook авторизациясы әлі қосылмаған.')}
        >
          <Text>🔵  Log in with Facebook</Text>
        </TouchableOpacity>

        <Text style={s.or}>or</Text>

        <TextInput
          style={s.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={s.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Forgot')}
        >
          <Text style={s.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.button} onPress={login}>
          <Text style={s.buttonText}>Log in</Text>
        </TouchableOpacity>

        <View style={s.row}>
          <Text>Don't have an account? </Text>
          <Text
            style={s.link}
            onPress={() => navigation.navigate('Register')}
          >
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  content: { flex: 1, justifyContent: 'center', padding: 25 },
  title: {
    fontSize: 25, fontWeight: 'bold',
    textAlign: 'center', color: '#29212A',
  },
  subtitle: {
    fontSize: 16, fontWeight: 'bold',
    textAlign: 'center', marginBottom: 30,
  },
  social: {
    height: 44, backgroundColor: '#EEEEEE',
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 6, marginBottom: 10,
  },
  or: { textAlign: 'center', color: '#999', margin: 15 },
  input: {
    height: 48, borderBottomWidth: 1,
    borderColor: '#DDDDDD', marginBottom: 15,
  },
  forgot: {
    color: '#8D1B78', textAlign: 'right',
    marginBottom: 15, fontSize: 12,
  },
  button: {
    height: 48, backgroundColor: '#8D1B78',
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  row: {
    flexDirection: 'row', justifyContent: 'center',
    marginTop: 25,
  },
  link: { color: '#8D1B78', fontWeight: 'bold' },
});