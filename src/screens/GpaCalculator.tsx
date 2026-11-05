import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

interface SubjectGrade {
  id: string;
  name: string;
  grade: number; // например, от 1 до 5 или 100-бальная
  credits: number;
}

export default function GpaCalculator() {
  const [subjects, setSubjects] = useState<SubjectGrade[]>([]);
  const [subjectName, setSubjectName] = useState('');
  const [gradeText, setGradeText] = useState('');
  const [creditsText, setCreditsText] = useState('');
  const [gpa, setGpa] = useState<string>('0.00');

  useEffect(() => {
    loadGrades();
  }, []);

  useEffect(() => {
    calculateGpa(subjects);
  }, [subjects]);

  const loadGrades = async () => {
    try {
      const saved = await AsyncStorage.getItem('@student_gpa_data');
      if (saved) {
        setSubjects(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const saveToStorage = async (data: SubjectGrade[]) => {
    setSubjects(data);
    try {
      await AsyncStorage.setItem('@student_gpa_data', JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  };

  const addSubject = () => {
    const grade = parseFloat(gradeText);
    const credits = parseFloat(creditsText);

    if (!subjectName.trim() || isNaN(grade) || isNaN(credits)) return;

    const newItem: SubjectGrade = {
      id: Date.now().toString(),
      name: subjectName.trim(),
      grade,
      credits,
    };

    saveToStorage([...subjects, newItem]);
    setSubjectName('');
    setGradeText('');
    setCreditsText('');
  };

  const deleteSubject = (id: string) => {
    const filtered = subjects.filter(item => item.id !== id);
    saveToStorage(filtered);
  };

  // Формула расчета взвешенного среднего GPA
  const calculateGpa = (list: SubjectGrade[]) => {
    if (list.length === 0) {
      setGpa('0.00');
      return;
    }
    let totalPoints = 0;
    let totalCredits = 0;

    list.forEach(item => {
      totalPoints += item.grade * item.credits;
      totalCredits += item.credits;
    });

    if (totalCredits === 0) {
      setGpa('0.00');
      return;
    }

    const result = totalPoints / totalCredits;
    setGpa(result.toFixed(2));
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <Text style={styles.title}>Калькулятор GPA (Успеваемость)</Text>

      {/* Блок с выводом текущего GPA */}
      <View style={styles.gpaCard}>
        <Text style={styles.gpaLabel}>Ваш средний балл:</Text>
        <Text style={styles.gpaValue}>{gpa}</Text>
      </View>

      {/* Форма ввода */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Название предмета"
          placeholderTextColor="#999"
          value={subjectName}
          onChangeText={setSubjectName}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            placeholder="Оценка (например, 4.5 или 90)"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={gradeText}
            onChangeText={setGradeText}
          />
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 8 }]}
            placeholder="Кредиты (например, 3)"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={creditsText}
            onChangeText={setCreditsText}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={addSubject}>
          <Ionicons name="calculator-outline" size={18} color="#fff" style={{ marginRight: 6 }} />
          <Text style={styles.buttonText}>Добавить предмет и пересчитать</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Список оцененных дисциплин:</Text>
      
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>Оценка: {item.grade}  |  Кредиты: {item.credits}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteSubject(item.id)}>
              <Ionicons name="trash-outline" size={20} color="#ff5252" />
            </TouchableOpacity>
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9fb' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#8D1B78', marginBottom: 15 },
  gpaCard: { backgroundColor: '#8D1B78', padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  gpaLabel: { color: '#f3e5f5', fontSize: 14, fontWeight: '500' },
  gpaValue: { color: '#fff', fontSize: 36, fontWeight: 'bold', marginTop: 5 },
  form: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 10, fontSize: 15, backgroundColor: '#fafafa', color: '#333' },
  row: { flexDirection: 'row' },
  button: { backgroundColor: '#8D1B78', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 14, borderRadius: 8, marginTop: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  subtitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  itemCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#eee' },
  itemName: { fontSize: 16, fontWeight: '600', color: '#333' },
  itemDetails: { fontSize: 13, color: '#666', marginTop: 4 },
});