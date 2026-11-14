import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Шапка профиля / Приветствие */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Сәлем, Ералиева! 👋</Text>
            <Text style={styles.subtitleText}>Добро пожаловать в University App</Text>
          </View>
          <TouchableOpacity 
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Ionicons name="person-circle-outline" size={36} color="#4A90E2" />
          </TouchableOpacity>
        </View>

        {/* Секция быстрого доступа к сервисам */}
        <Text style={styles.sectionTitle}>Быстрые сервисы</Text>
        <View style={styles.gridContainer}>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('GpaCalculator')}
          >
            <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="calculator-outline" size={24} color="#1E88E5" />
            </View>
            <Text style={styles.cardText}>GPA Calculator</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('CampusMap')}
          >
            <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="map-outline" size={24} color="#43A047" />
            </View>
            <Text style={styles.cardText}>Campus Map</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Assignments')}
          >
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="document-text-outline" size={24} color="#FB8C00" />
            </View>
            <Text style={styles.cardText}>Assignments</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('FocusTimer')}
          >
            <View style={[styles.iconBox, { backgroundColor: '#F3E5F5' }]}>
              <Ionicons name="timer-outline" size={24} color="#8E24AA" />
            </View>
            <Text style={styles.cardText}>Focus Timer</Text>
          </TouchableOpacity>

        </View>

        {/* Секция навигации по основным разделам */}
        <Text style={styles.sectionTitle}>Учеба и расписание</Text>
        <View style={styles.listContainer}>

          <TouchableOpacity 
            style={styles.listItem} 
            onPress={() => navigation.navigate('Schedule')}
          >
            <Ionicons name="calendar-outline" size={22} color="#555" />
            <Text style={styles.listItemText}>Расписание пар</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.listItem} 
            onPress={() => navigation.navigate('Courses')}
          >
            <Ionicons name="book-outline" size={22} color="#555" />
            <Text style={styles.listItemText}>Мои курсы</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.listItem} 
            onPress={() => navigation.navigate('Results')}
          >
            <Ionicons name="trophy-outline" size={22} color="#555" />
            <Text style={styles.listItemText}>Оценки и результаты</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
  },
  subtitleText: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 2,
  },
  profileButton: {
    padding: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343A40',
    marginBottom: 12,
    marginTop: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: { ios: 0.05, android: 0.1 } as any,
    shadowRadius: 4,
    elevation: 2,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: { ios: 0.05, android: 0.1 } as any,
    shadowRadius: 4,
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    marginLeft: 12,
  },
});