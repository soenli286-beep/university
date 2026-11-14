import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CourseDetailScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Детали курса</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.courseCard}>
          <Text style={styles.courseCode}>CS-302</Text>
          <Text style={styles.courseTitle}>Mobile Application Development</Text>
          <Text style={styles.teacherName}>Преподаватель: Канагатов Манат</Text>
          
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>6 кредитов</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#E8F5E9' }]}>
              <Text style={[styles.badgeText, { color: '#2E7D32' }]}>Активен</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Материалы и лекции</Text>
        
        <TouchableOpacity style={styles.materialItem}>
          <Ionicons name="document-text" size={24} color="#1E88E5" />
          <View style={styles.materialInfo}>
            <Text style={styles.materialTitle}>Лекция №1: Введение в React Native</Text>
            <Text style={styles.materialSubtitle}>PDF • 2.4 MB</Text>
          </View>
          <Ionicons name="download-outline" size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.materialItem}>
          <Ionicons name="document-text" size={24} color="#1E88E5" />
          <View style={styles.materialInfo}>
            <Text style={styles.materialTitle}>Практикум: Навигация и Stack</Text>
            <Text style={styles.materialSubtitle}>PDF • 1.8 MB</Text>
          </View>
          <Ionicons name="download-outline" size={20} color="#666" />
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
  courseCard: { backgroundColor: '#FFF', borderRadius: 16, padding: 20, marginBottom: 24, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  courseCode: { fontSize: 14, color: '#1E88E5', fontWeight: 'bold', marginBottom: 4 },
  courseTitle: { fontSize: 20, fontWeight: 'bold', color: '#212529', marginBottom: 8 },
  teacherName: { fontSize: 14, color: '#6C757D', marginBottom: 16 },
  badgeRow: { flexDirection: 'row' },
  badge: { backgroundColor: '#E3F2FD', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginRight: 8 },
  badgeText: { color: '#1E88E5', fontSize: 12, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 12 },
  materialItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 3 },
  materialInfo: { flex: 1, marginLeft: 12 },
  materialTitle: { fontSize: 15, fontWeight: '600', color: '#333' },
  materialSubtitle: { fontSize: 12, color: '#888', marginTop: 2 }
});