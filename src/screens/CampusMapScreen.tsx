import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function CampusMapScreen() {
  const locations = [
    { title: 'Main Building & Rectorate', room: 'Block A, Floor 1', status: 'Ашық' },
    { title: 'Computer Science Labs', room: 'Block B, Floor 3', status: 'Ашық' },
    { title: 'University Library', room: 'Block C, Floor 2', status: 'Жабылуға жақын' },
    { title: 'Student Cafeteria', room: 'Block D, Floor 1', status: 'Ашық' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Campus Map & Buildings</Text>

        <View style={styles.mapCard}>
          <Ionicons name="map-outline" size={48} color="#8D1B78" />
          <Text style={styles.mapPlaceholderText}>Интерактивті кампус картасы</Text>
        </View>

        <Text style={styles.sectionTitle}>Негізгі орындар</Text>

        {locations.map((item, index) => (
          <TouchableOpacity key={index} style={styles.locationItem}>
            <View style={styles.iconBox}>
              <Feather name="navigation" size={18} color="#8D1B78" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.locTitle}>{item.title}</Text>
              <Text style={styles.locRoom}>{item.room}</Text>
            </View>
            <Text style={styles.locStatus}>{item.status}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { padding: 20 },
  headerTitle: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#111' },
  mapCard: { height: 160, backgroundColor: '#FAF7FB', borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#F0E6F2', marginBottom: 20 },
  mapPlaceholderText: { marginTop: 8, color: '#8D1B78', fontWeight: '600', fontSize: 14 },
  sectionTitle: { fontSize: 15, fontWeight: '700', marginBottom: 12, color: '#111' },
  locationItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 14, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#EFEFEF' },
  iconBox: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3E5F5', justifyContent: 'center', alignItems: 'center' },
  locTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  locRoom: { fontSize: 12, color: '#666', marginTop: 2 },
  locStatus: { fontSize: 12, fontWeight: '600', color: '#4CAF50' },
});