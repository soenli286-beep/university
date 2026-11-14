import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AttendanceScreen({ navigation }: { navigation: any }) {
  const attendanceData = [
    { id: '1', subject: 'Mobile App Development', attended: 28, total: 30, percent: 93 },
    { id: '2', subject: 'PostgreSQL & Databases', attended: 24, total: 30, percent: 80 },
    { id: '3', subject: 'Electronics Simulation', attended: 29, total: 30, percent: 97 },
    { id: '4', subject: 'Philosophy', attended: 22, total: 30, percent: 73 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Посещаемость</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {attendanceData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.subjectTitle}>{item.subject}</Text>
              <Text style={[styles.percentText, { color: item.percent >= 80 ? '#2E7D32' : '#FB8C00' }]}>
                {item.percent}%
              </Text>
            </View>
            <Text style={styles.subText}>Посещено занятий: {item.attended} из {item.total}</Text>
            <View style={styles.progressBarBg}>
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width: `${item.percent}%`,
                    backgroundColor: item.percent >= 80 ? '#43A047' : '#FB8C00',
                  },
                ]}
              />
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
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  subjectTitle: { fontSize: 16, fontWeight: 'bold', color: '#212529', flex: 1, marginRight: 8 },
  percentText: { fontSize: 16, fontWeight: 'bold' },
  subText: { fontSize: 13, color: '#6C757D', marginBottom: 10 },
  progressBarBg: { height: 8, backgroundColor: '#E9ECEF', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 4 },
});