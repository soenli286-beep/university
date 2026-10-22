import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    alert(`Жүйеге кіру орындалуда: ${studentId}`);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Жоғарғы декоративті бөлім */}
          <View style={styles.headerBg}>
            <View style={[styles.circle, styles.circle1]} />
            <View style={[styles.circle, styles.circle2]} />
            <View style={styles.brandContainer}>
              <View style={styles.logo}>
                <Ionicons name="school" size={36} color="#ffffff" />
              </View>
              <Text style={styles.brandTitle}>UniPortal</Text>
              <Text style={styles.brandSubtitle}>
                Студенттер қауымдастығына кош келдіңіз!
              </Text>
            </View>
          </View>

          {/* Форма карточкасы */}
          <View style={styles.loginCard}>
            <Text style={styles.title}>Жүйеге кіру</Text>
            <Text style={styles.subtitle}>
              Студенттік аккаунтыңызға кіріңіз
            </Text>

            {/* Email / ID енгізу өрісі */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Студент ID немесе Email</Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="#94a3b8"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="2023xxxx@univ.edu.kz"
                  placeholderTextColor="#94a3b8"
                  value={studentId}
                  onChangeText={setStudentId}
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Құпия сөз өрісі */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Құпия сөз</Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#94a3b8"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#94a3b8"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Есте сақтау және Парольді ұмыту */}
            <View style={styles.actionsRow}>
              <TouchableOpacity
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <Ionicons
                  name={rememberMe ? 'checkbox' : 'square-outline'}
                  size={20}
                  color="#4f46e5"
                />
                <Text style={styles.rememberText}>Есте сақтау</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Парольді ұмыттыңыз ба?</Text>
              </TouchableOpacity>
            </View>

            {/* Кіру батырмасы */}
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginBtnText}>Кіру</Text>
              <Ionicons name="arrow-forward" size={18} color="#ffffff" />
            </TouchableOpacity>

            {/* Бөлгіш */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>немесе</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Университет поштасы арқылы кіру */}
            <TouchableOpacity style={styles.ssoBtn}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/475656/google-color.svg',
                }}
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
              <Text style={styles.ssoBtnText}>
                Корпоративтік поштамен кіру
              </Text>
            </TouchableOpacity>

            {/* Тіркелу сілтемесі */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Аккаунтыңыз жоқ па? </Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Тіркелу</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f46e5',
  },
  headerBg: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circle1: {
    width: 150,
    height: 150,
    top: -30,
    right: -30,
  },
  circle2: {
    width: 200,
    height: 200,
    bottom: -50,
    left: -50,
  },
  brandContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  brandSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  loginCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 25,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: '#1e293b',
  },
  eyeIcon: {
    padding: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 13,
    color: '#64748b',
    marginLeft: 6,
  },
  forgotText: {
    fontSize: 13,
    color: '#4f46e5',
    fontWeight: '600',
  },
  loginBtn: {
    backgroundColor: '#4f46e5',
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  loginBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    marginRight: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#94a3b8',
    fontSize: 12,
  },
  ssoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    height: 48,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  ssoBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  signupText: {
    fontSize: 13,
    color: '#64748b',
  },
  signupLink: {
    fontSize: 13,
    color: '#4f46e5',
    fontWeight: '600',
  },
});