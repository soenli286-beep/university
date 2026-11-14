import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ClubsScreen({ navigation }: { navigation: any }) {
  const clubs = [
    { id: '1', name: 'Appstorm Dev Club', members: '84 участника', desc: 'Разработка мобильных приложений и стартапов' },
    { id: '2', name: 'Debate Union', members: '52 участника', desc: 'Парламентские дебаты и ораторское искусство' },
    { id: '3', name: 'Robotics & Hardware', members: '39 участников', desc: 'Микроконтроллеры, схемы и робототехника' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Студенческие клубы</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {clubs.map((club) => (
          <View key={club.id} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <Ionicons name="people" size={24} color="#8E24AA" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.clubName}>{club.name}</Text>
                <Text style={styles.members}>{club.members}</Text>
              </View>
            </View>
            <Text style={styles.desc}>{club.desc}</Text>
            <TouchableOpacity
              style={styles.joinBtn}
              onPress={() => Alert.alert('Заявка принята', `Вы подали заявку в клуб «${club.name}»`)}
            >
              <Text style={styles.joinText}>Вступить в клуб</Text>
            </TouchableOpacity>
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
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  iconBox: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F3E5F5', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  clubName: { fontSize: 16, fontWeight: 'bold', color: '#212529' },
  members: { fontSize: 12, color: '#8E24AA', fontWeight: '600' },
  desc: { fontSize: 13, color: '#495057', marginBottom: 12 },
  joinBtn: { backgroundColor: '#F3E5F5', paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
  joinText: { color: '#8E24AA', fontWeight: 'bold', fontSize: 14 },
});