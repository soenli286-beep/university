import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExamScheduleScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Расписание экзаменов</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.examCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>15</Text>
            <Text style={styles.dateMonth}>ДЕК</Text>
          </View>
          <View style={styles.examInfo}>
            <Text style={styles.examTitle}>Software Architecture</Text>
            <Text style={styles.examDetail}>🕒 10:00 - 13:00</Text>
            <Text style={styles.examDetail}>📍 Аудитория: 405 (Главный корпус)</Text>
          </View>
        </View>

        <View style={styles.examCard}>
          <View style={[styles.dateBox, { backgroundColor: '#E8F5E9' }]}>
            <Text style={[styles.dateDay, { color: '#2E7D32' }]}>18</Text>
            <Text style={[styles.dateMonth, { color: '#2E7D32' }]}>ДЕК</Text>
          </View>
          <View style={styles.examInfo}>
            <Text style={styles.examTitle}>Databases & PL/pgSQL</Text>
            <Text style={styles.examDetail}>🕒 14:00 - 17:00</Text>
            <Text style={styles.examDetail}>📍 Аудитория: Лаборатория 201</Text>
          </View>
        </View>
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
  examCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 16, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  dateBox: { width: 60, height: 60, backgroundColor: '#E3F2FD', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  dateDay: { fontSize: 20, fontWeight: 'bold', color: '#1E88E5' },
  dateMonth: { fontSize: 12, fontWeight: '600', color: '#1E88E5' },
  examInfo: { flex: 1 },
  examTitle: { fontSize: 16, fontWeight: 'bold', color: '#212529', marginBottom: 4 },
  examDetail: { fontSize: 13, color: '#6C757D', marginTop: 2 }
});