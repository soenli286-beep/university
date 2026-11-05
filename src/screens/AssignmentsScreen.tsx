import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AssignmentsScreen() {
  const tasks = [
    { title: 'Database SQL Project', course: 'Computer Science', deadline: 'Бүгін, 23:59', status: 'Орындалуда' },
    { title: 'UI/UX Wireframes Design', course: 'Design Learning', deadline: 'Ертең, 18:00', status: 'Күтуде' },
    { title: 'Shopify Store Setup', course: 'Digital Marketing', deadline: '02.11.2026', status: 'Аяқталды' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Assignments & Tasks</Text>

        {tasks.map((item, index) => (
          <View key={index} style={styles.taskCard}>
            <View style={styles.row}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Feather 
                name={item.status === 'Аяқталды' ? 'check-circle' : 'clock'} 
                size={18} 
                color={item.status === 'Аяқталды' ? '#4CAF50' : '#FF9800'} 
              />
            </View>
            <Text style={styles.taskCourse}>{item.course}</Text>
            
            <View style={styles.footerRow}>
              <Text style={styles.deadlineText}>⏰ Дедлайн: {item.deadline}</Text>
              <Text style={[styles.statusText, item.status === 'Аяқталды' && { color: '#4CAF50' }]}>
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { padding: 20 },
  headerTitle: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#111' },
  taskCard: { backgroundColor: '#FAF7FB', borderRadius: 14, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#F0E6F2' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  taskTitle: { fontSize: 15, fontWeight: '700', color: '#111', flex: 1 },
  taskCourse: { fontSize: 12, color: '#8D1B78', fontWeight: '600', marginBottom: 12 },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#E5D5E8', paddingTop: 10 },
  deadlineText: { fontSize: 11, color: '#666' },
  statusText: { fontSize: 11, fontWeight: '700', color: '#FF9800' },
});