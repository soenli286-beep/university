import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RoomBookingScreen({ navigation }: { navigation: any }) {
  const [bookedId, setBookedId] = useState<string | null>(null);

  const rooms = [
    { id: '1', name: 'Coworking Zone A', capacity: 'До 6 человек', time: '14:00 - 16:00' },
    { id: '2', name: 'IT Lab 304', capacity: 'До 12 человек', time: '16:00 - 18:00' },
    { id: '3', name: 'Silent Study Room 2', capacity: 'До 4 человек', time: '18:00 - 20:00' },
  ];

  const handleBook = (id: string, name: string) => {
    setBookedId(id);
    Alert.alert('Успешно', `Вы забронировали: ${name}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Бронь аудиторий</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {rooms.map((room) => {
          const isBooked = bookedId === room.id;
          return (
            <View key={room.id} style={styles.card}>
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomDetail}>👥 {room.capacity}</Text>
              <Text style={styles.roomDetail}>🕒 {room.time}</Text>
              <TouchableOpacity
                style={[styles.bookBtn, isBooked && styles.bookedBtn]}
                onPress={() => handleBook(room.id, room.name)}
              >
                <Text style={styles.bookBtnText}>{isBooked ? 'Забронировано ✓' : 'Забронировать'}</Text>
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
  roomName: { fontSize: 17, fontWeight: 'bold', color: '#212529', marginBottom: 6 },
  roomDetail: { fontSize: 14, color: '#6C757D', marginBottom: 4 },
  bookBtn: { marginTop: 12, backgroundColor: '#1E88E5', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  bookedBtn: { backgroundColor: '#43A047' },
  bookBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});