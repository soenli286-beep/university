import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShuttleBusScreen({ navigation }: { navigation: any }) {
  const routes = [
    { id: '1', route: 'Главный корпус → Общежитие №1', departure: '13:15', status: 'Через 10 мин' },
    { id: '2', route: 'Общежитие №1 → Главный корпус', departure: '14:00', status: 'По расписанию' },
    { id: '3', route: 'Главный корпус → Технопарк', departure: '15:30', status: 'По расписанию' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Шаттл-басы</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {routes.map((bus) => (
          <View key={bus.id} style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons name="bus-outline" size={24} color="#1E88E5" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.routeTitle}>{bus.route}</Text>
              <Text style={styles.timeText}>Отправление: {bus.departure}</Text>
              <Text style={styles.statusText}>{bus.status}</Text>
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
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  iconBox: { width: 46, height: 46, borderRadius: 12, backgroundColor: '#E3F2FD', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  routeTitle: { fontSize: 15, fontWeight: 'bold', color: '#212529', marginBottom: 4 },
  timeText: { fontSize: 13, color: '#495057' },
  statusText: { fontSize: 12, color: '#2E7D32', fontWeight: '600', marginTop: 4 },
});