import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventsScreen({ navigation }: { navigation: any }) {
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);

  const events = [
    { id: '1', title: 'University Tech Hackathon 2026', date: '22 Ноября • 10:00', location: 'Главный актовый зал' },
    { id: '2', title: 'Гостевая лекция: AI в разработке', date: '25 Ноября • 16:00', location: 'Аудитория 101' },
    { id: '3', title: 'День открытых дверей IT-клубов', date: '28 Ноября • 14:30', location: 'Атриум, 1 этаж' },
  ];

  const toggleRegister = (id: string) => {
    setRegisteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Мероприятия</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {events.map((ev) => {
          const isReg = registeredIds.includes(ev.id);
          return (
            <View key={ev.id} style={styles.card}>
              <Text style={styles.dateText}>{ev.date}</Text>
              <Text style={styles.titleText}>{ev.title}</Text>
              <Text style={styles.locText}>📍 {ev.location}</Text>
              <TouchableOpacity
                style={[styles.btn, isReg && styles.btnActive]}
                onPress={() => toggleRegister(ev.id)}
              >
                <Text style={styles.btnText}>{isReg ? 'Вы записаны ✓' : 'Участвовать'}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
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
  card: { backgroundColor: '#FFF', borderRadius: 16, padding: 18, marginBottom: 14, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  dateText: { fontSize: 12, fontWeight: '700', color: '#8E24AA', marginBottom: 4 },
  titleText: { fontSize: 17, fontWeight: 'bold', color: '#212529', marginBottom: 6 },
  locText: { fontSize: 13, color: '#6C757D', marginBottom: 14 },
  btn: { backgroundColor: '#1E88E5', paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
  btnActive: { backgroundColor: '#43A047' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});