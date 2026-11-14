import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LibraryScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Библиотека</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
          <TextInput placeholder="Поиск книг, авторов..." placeholderTextColor="#888" style={styles.input} />
        </View>

        <Text style={styles.sectionTitle}>Популярные издания</Text>

        <View style={styles.bookCard}>
          <View style={styles.bookIcon}><Ionicons name="book" size={28} color="#FB8C00" /></View>
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>Clean Code: A Handbook of Agile Craftsmanship</Text>
            <Text style={styles.bookAuthor}>Robert C. Martin</Text>
            <Text style={styles.bookStatus}>Доступно в читальном зале</Text>
          </View>
        </View>

        <View style={styles.bookCard}>
          <View style={styles.bookIcon}><Ionicons name="book" size={28} color="#FB8C00" /></View>
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>Introduction to Algorithms</Text>
            <Text style={styles.bookAuthor}>Thomas H. Cormen</Text>
            <Text style={[styles.bookStatus, { color: '#E53935' }]}>На руках (возврат 20 дек)</Text>
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
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 12, paddingHorizontal: 16, height: 48, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 3 },
  input: { flex: 1, fontSize: 15, color: '#333' },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 12 },
  bookCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 12, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  bookIcon: { width: 50, height: 50, backgroundColor: '#FFF3E0', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  bookInfo: { flex: 1 },
  bookTitle: { fontSize: 15, fontWeight: 'bold', color: '#212529', marginBottom: 2 },
  bookAuthor: { fontSize: 13, color: '#6C757D', marginBottom: 6 },
  bookStatus: { fontSize: 12, color: '#43A047', fontWeight: '600' }
});