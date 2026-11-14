import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DormitoryScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Общежитие</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.roomCard}>
          <Text style={styles.badgeText}>Дом студентов №2</Text>
          <Text style={styles.roomNumber}>Комната 414-Б</Text>
          <Text style={styles.roomSub}>Договор активен до 30.06.2027 • Оплачено</Text>
        </View>

        <Text style={styles.sectionTitle}>Сервисы проживания</Text>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => Alert.alert('Заявка отправлена', 'Комендант рассмотрит обращение в течение дня.')}
        >
          <Ionicons name="construct-outline" size={24} color="#FB8C00" />
          <View style={styles.actionInfo}>
            <Text style={styles.actionTitle}>Вызвать мастера / Ремонт</Text>
            <Text style={styles.actionSub}>Сантехника, электрика, мебель</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BBB" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => Alert.alert('Пропуск гостя', 'Электронный пропуск оформлен на сегодня.')}
        >
          <Ionicons name="qr-code-outline" size={24} color="#1E88E5" />
          <View style={styles.actionInfo}>
            <Text style={styles.actionTitle}>Оформить гостевой пропуск</Text>
            <Text style={styles.actionSub}>Вход на территорию кампуса</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BBB" />
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
  roomCard: { backgroundColor: '#FFF', borderRadius: 16, padding: 20, marginBottom: 24, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#2E7D32', backgroundColor: '#E8F5E9', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, marginBottom: 8 },
  roomNumber: { fontSize: 22, fontWeight: 'bold', color: '#212529', marginBottom: 4 },
  roomSub: { fontSize: 13, color: '#6C757D' },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: '#333', marginBottom: 12 },
  actionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 3 },
  actionInfo: { flex: 1, marginLeft: 14 },
  actionTitle: { fontSize: 15, fontWeight: 'bold', color: '#212529' },
  actionSub: { fontSize: 12, color: '#6C757D', marginTop: 2 },
});