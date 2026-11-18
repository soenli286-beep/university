import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const services = [
  { title: 'Стипендия', route: 'Scholarship', icon: 'school-outline' },
  { title: 'Студенттік билет', route: 'StudentID', icon: 'card-outline' },
  { title: 'Академиялық күнтізбе', route: 'AcademicCalendar', icon: 'calendar-outline' },
  { title: 'Оқу материалдары', route: 'StudyMaterials', icon: 'documents-outline' },
  { title: 'Мансап орталығы', route: 'CareerCenter', icon: 'briefcase-outline' },
  { title: 'Практика', route: 'Internship', icon: 'business-outline' },
  { title: 'Жоғалған заттар', route: 'LostFound', icon: 'search-outline' },
  { title: 'Сұрақ-жауап', route: 'FAQ', icon: 'help-circle-outline' },
  { title: 'Оқу ақысы', route: 'TuitionFee', icon: 'wallet-outline' },
  { title: 'Студенттерге көмек', route: 'StudentSupport', icon: 'heart-outline' },
] as const;

export default function ServicesScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Қосымша қызметтер</Text>
      <Text style={styles.subheading}>Университеттің пайдалы сервистері бір жерде</Text>
      <View style={styles.grid}>
        {services.map((service) => (
          <Pressable
            key={service.route}
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
            onPress={() => navigation.navigate(service.route)}
          >
            <View style={styles.iconBox}>
              <Ionicons name={service.icon as keyof typeof Ionicons.glyphMap} size={25} color="#8D1B78" />
            </View>
            <Text style={styles.cardTitle}>{service.title}</Text>
            <Ionicons name="chevron-forward" size={17} color="#A0A2A9" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F6F7F9' },
  content: { padding: 18, paddingTop: 58, paddingBottom: 30 },
  heading: { fontSize: 25, fontWeight: '800', color: '#20232A' },
  subheading: { fontSize: 14, color: '#777B85', marginTop: 7, marginBottom: 22 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48.5%', minHeight: 126, backgroundColor: '#FFF', borderRadius: 17, padding: 14, marginBottom: 12, justifyContent: 'space-between', elevation: 2, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 7 },
  pressed: { opacity: 0.75, transform: [{ scale: 0.98 }] },
  iconBox: { width: 46, height: 46, borderRadius: 14, backgroundColor: '#F8EFF6', alignItems: 'center', justifyContent: 'center' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#30323A', marginTop: 12, flex: 1 },
});
