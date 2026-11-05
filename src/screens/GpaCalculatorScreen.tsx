import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GpaCalculatorScreen() {
  const [courses, setCourses] = useState([
    { name: 'Computer Science', credit: '3', grade: '4.0' },
    { name: 'Digital Marketing', credit: '4', grade: '3.5' },
  ]);

  const addCourse = () => {
    setCourses([...courses, { name: '', credit: '3', grade: '4.0' }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>GPA Calculator</Text>

        {courses.map((item, index) => (
          <View key={index} style={styles.courseCard}>
            <TextInput
              style={styles.inputName}
              placeholder="Предметтин аты"
              defaultValue={item.name}
            />
            <View style={styles.row}>
              <TextInput
                style={styles.inputSmall}
                placeholder="Кредит"
                keyboardType="numeric"
                defaultValue={item.credit}
              />
              <TextInput
                style={styles.inputSmall}
                placeholder="Баасы (GPA)"
                keyboardType="numeric"
                defaultValue={item.grade}
              />
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.addBtn} onPress={addCourse}>
          <Ionicons name="add-circle-outline" size={20} color="#8D1B78" />
          <Text style={styles.addBtnText}>Жаңы предмет кошуу</Text>
        </TouchableOpacity>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Божомолдуу GPA:</Text>
          <Text style={styles.resultValue}>3.75</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { padding: 20 },
  headerTitle: { fontSize: 20, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  courseCard: { backgroundColor: '#FAF7FB', padding: 14, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#F0E6F2' },
  inputName: { backgroundColor: '#FFF', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#E5E5E5', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  inputSmall: { flex: 0.48, backgroundColor: '#FFF', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#E5E5E5' },
  addBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15 },
  addBtnText: { color: '#8D1B78', fontWeight: '600', marginLeft: 6 },
  resultBox: { backgroundColor: '#8D1B78', padding: 20, borderRadius: 16, alignItems: 'center', marginTop: 10 },
  resultLabel: { color: '#FFF', fontSize: 14 },
  resultValue: { color: '#FFF', fontSize: 32, fontWeight: '800', marginTop: 4 },
});