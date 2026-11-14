import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CafeteriaMenuScreen({ navigation }: { navigation: any }) {
  const menu = [
    { id: '1', name: 'Куриное филе на гриле с гречкой', kcal: '420 ккал', price: '1 150 ₸', category: 'Горячее' },
    { id: '2', name: 'Салат из свежих огурцов и зелени', kcal: '120 ккал', price: '450 ₸', category: 'Салаты' },
    { id: '3', name: 'Творожная запеканка без сахара', kcal: '260 ккал', price: '650 ₸', category: 'Десерты' },
    { id: '4', name: 'Американо / Зеленый чай', kcal: '5 ккал', price: '400 ₸', category: 'Напитки' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Меню столовой</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Сегодня в меню</Text>
        {menu.map((dish) => (
          <View key={dish.id} style={styles.dishCard}>
            <View style={styles.iconBox}>
              <Ionicons name="restaurant-outline" size={22} color="#FB8C00" />
            </View>
            <View style={styles.dishInfo}>
              <Text style={styles.categoryText}>{dish.category}</Text>
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.kcalText}>{dish.kcal}</Text>
            </View>
            <Text style={styles.priceText}>{dish.price}</Text>
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
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 14 },
  dishCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 16, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  iconBox: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#FFF3E0', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  dishInfo: { flex: 1, marginRight: 8 },
  categoryText: { fontSize: 11, color: '#FB8C00', fontWeight: '600', textTransform: 'uppercase' },
  dishName: { fontSize: 15, fontWeight: 'bold', color: '#212529', marginVertical: 2 },
  kcalText: { fontSize: 12, color: '#888' },
  priceText: { fontSize: 15, fontWeight: 'bold', color: '#2E7D32' },
});