import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TranscriptScreen({ navigation }: { navigation: any }) {
  const grades = [
    { code: 'CS-301', title: 'Algorithms & Data Structures', credits: 6, grade: 'A', points: '4.0' },
    { code: 'DB-204', title: 'Relational Databases', credits: 5, grade: 'A-', points: '3.67' },
    { code: 'EL-210', title: 'Circuit Simulation', credits: 5, grade: 'B+', points: '3.33' },
    { code: 'PH-101', title: 'Philosophy', credits: 4, grade: 'A', points: '4.0' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Транскрипт</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.gpaBanner}>
          <Text style={styles.gpaLabel}>Общий средний балл (GPA)</Text>
          <Text style={styles.gpaValue}>3.76</Text>
          <Text style={styles.gpaCredits}>Всего кредитов: 120</Text>
        </View>

        <Text style={styles.sectionTitle}>Осенний семестр</Text>
        {grades.map((item, index) => (
          <View key={index} style={styles.rowCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.codeText}>{item.code} • {item.credits} кр.</Text>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.gradeBadge}>
              <Text style={styles.gradeLetter}>{item.grade}</Text>
              <Text style={styles.gradePoints}>{item.points}</Text>
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
  gpaBanner: { backgroundColor: '#1E88E5', borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 24 },
  gpaLabel: { color: '#E3F2FD', fontSize: 14, marginBottom: 4 },
  gpaValue: { color: '#FFF', fontSize: 36, fontWeight: 'bold' },
  gpaCredits: { color: '#BBDEFB', fontSize: 13, marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 12 },
  rowCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 14, marginBottom: 10, elevation: 1, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 3 },
  codeText: { fontSize: 12, color: '#1E88E5', fontWeight: '600', marginBottom: 2 },
  titleText: { fontSize: 15, fontWeight: 'bold', color: '#212529' },
  gradeBadge: { alignItems: 'center', backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  gradeLetter: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32' },
  gradePoints: { fontSize: 11, color: '#388E3C' },
});