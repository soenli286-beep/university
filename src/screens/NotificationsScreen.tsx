import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Уведомления</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.notifCard}>
          <View style={[styles.notifIcon, { backgroundColor: '#E3F2FD' }]}>
            <Ionicons name="calendar" size={22} color="#1E88E5" />
          </View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Изменение в расписании</Text>
            <Text style={styles.notifDesc}>Лекция по Software Architecture перенесена в аудиторию 405.</Text>
            <Text style={styles.notifTime}>Сегодня, 11:20</Text>
          </View>
        </View>

        <View style={styles.notifCard}>
          <View style={[styles.notifIcon, { backgroundColor: '#E8F5E9' }]}>
            <Ionicons name="trophy" size={22} color="#43A047" />
          </View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Новая оценка</Text>
            <Text style={styles.notifDesc}>Вы получили 'A' за лабораторную работу по базам данных.</Text>
            <Text style={styles.notifTime}>Вчера, 16:45</Text>
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
  notifCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 12, alignItems: 'flex-start', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  notifIcon: { width: 40, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  notifInfo: { flex: 1 },
  notifTitle: { fontSize: 15, fontWeight: 'bold', color: '#212529', marginBottom: 4 },
  notifDesc: { fontSize: 13, color: '#495057', lineHeight: 18, marginBottom: 6 },
  notifTime: { fontSize: 11, color: '#ADB5BD' }
});