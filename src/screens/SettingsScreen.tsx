import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }: { navigation: any }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isPushEnabled, setIsPushEnabled] = React.useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Настройки</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Основные</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLabelRow}>
            <Ionicons name="moon-outline" size={22} color="#555" />
            <Text style={styles.settingText}>Темная тема</Text>
          </View>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLabelRow}>
            <Ionicons name="notifications-outline" size={22} color="#555" />
            <Text style={styles.settingText}>Push-уведомления</Text>
          </View>
          <Switch value={isPushEnabled} onValueChange={setIsPushEnabled} />
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Аккаунт</Text>
        
        <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Login')}>
          <Ionicons name="log-out-outline" size={22} color="#E53935" />
          <Text style={[styles.linkText, { color: '#E53935' }]}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#EEE' },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  container: { padding: 20 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#888', marginBottom: 12, textTransform: 'uppercase' },
  settingItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 8, elevation: 1, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 3 },
  settingLabelRow: { flexDirection: 'row', alignItems: 'center' },
  settingText: { fontSize: 16, color: '#333', marginLeft: 12 },
  linkItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 8, elevation: 1, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 3 },
  linkText: { fontSize: 16, fontWeight: '600', marginLeft: 12 }
});