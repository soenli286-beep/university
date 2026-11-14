import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TeacherContactScreen({ navigation }: { navigation: any }) {
  const teachers = [
    { id: '1', name: 'Канагатов Манат', dept: 'Кафедра философии и гуманитарных наук', hours: 'Вт, Чт 14:00–16:00', room: 'Каб. 312' },
    { id: '2', name: 'Алибеков Данияр', dept: 'Факультет информационных технологий', hours: 'Пн, Ср 15:00–17:00', room: 'Каб. 408' },
    { id: '3', name: 'Смагулова Айгерим', dept: 'Кафедра электроники и схемотехники', hours: 'Пт 11:00–13:00', room: 'Лаб. 205' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Преподаватели</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {teachers.map((t) => (
          <View key={t.id} style={styles.card}>
            <View style={styles.topRow}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={22} color="#1E88E5" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{t.name}</Text>
                <Text style={styles.dept}>{t.dept}</Text>
              </View>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>🕒 Office Hours: {t.hours}</Text>
              <Text style={styles.infoText}>📍 {t.room}</Text>
            </View>
          </View>
        ))}
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
  card: { backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 14, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  topRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#E3F2FD', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#212529' },
  dept: { fontSize: 12, color: '#6C757D', marginTop: 2 },
  infoBox: { backgroundColor: '#F8F9FA', padding: 10, borderRadius: 10 },
  infoText: { fontSize: 13, color: '#495057', marginVertical: 2 },
});