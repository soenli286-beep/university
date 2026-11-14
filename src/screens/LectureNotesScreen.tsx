import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LectureNotesScreen({ navigation }: { navigation: any }) {
  const notes = [
    { id: '1', title: 'React Navigation: Stack & Tabs', course: 'Mobile App Dev', date: '10 ноя', pages: '14 стр.' },
    { id: '2', title: 'Нормализация БД и индексы', course: 'PostgreSQL & DB', date: '08 ноя', pages: '22 стр.' },
    { id: '3', title: 'Характеристики N-канального MOSFET', course: 'Electronics', date: '05 ноя', pages: '9 стр.' },
    { id: '4', title: 'Экзистенциализм и философия науки', course: 'Philosophy', date: '02 ноя', pages: '11 стр.' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Конспекты</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {notes.map((note) => (
          <TouchableOpacity key={note.id} style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons name="document-attach-outline" size={24} color="#1E88E5" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.courseTag}>{note.course}</Text>
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text style={styles.metaText}>{note.date} • {note.pages}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#BBB" />
          </TouchableOpacity>
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
  courseTag: { fontSize: 11, fontWeight: '700', color: '#1E88E5', textTransform: 'uppercase', marginBottom: 2 },
  noteTitle: { fontSize: 15, fontWeight: 'bold', color: '#212529', marginBottom: 4 },
  metaText: { fontSize: 12, color: '#6C757D' },
});