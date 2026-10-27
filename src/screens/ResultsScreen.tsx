import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const results = [
  { name: 'Digital Thinking', grade: 'A', score: '92 / 100' },
  { name: 'Computer Science', grade: 'A-', score: '88 / 100' },
  { name: 'Web Development', grade: 'B+', score: '85 / 100' },
  { name: 'Communication Skills', grade: 'A', score: '94 / 100' },
];

export default function ResultsScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>My Results</Text>

      <View style={s.banner}>
        <Text style={s.white}>Overall GPA</Text>
        <Text style={s.gpa}>3.65</Text>
        <Text style={s.white}>Keep up the good work!</Text>
      </View>

      <Text style={s.heading}>Recent Grades</Text>

      {results.map(result => (
        <View style={s.card} key={result.name}>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{result.name}</Text>
            <Text style={s.muted}>{result.score}</Text>
          </View>
          <Text style={s.grade}>{result.grade}</Text>
        </View>
      ))}

      <Text style={s.note}>
        * Көрсетілген бағалар — интерфейске арналған үлгі деректер.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F4F8' },
  content: { padding: 20 },
  title: { fontSize: 25, fontWeight: 'bold', marginBottom: 15 },
  banner: {
    backgroundColor: '#8D1B78',
    borderRadius: 15,
    padding: 25,
    marginVertical: 12,
  },
  white: { color: 'white' },
  gpa: { fontSize: 42, color: 'white', fontWeight: 'bold', marginVertical: 8 },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 12 },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: { fontWeight: 'bold', color: '#29212A' },
  muted: { color: '#888', marginTop: 5, fontSize: 12 },
  grade: {
    fontSize: 18,
    color: '#8D1B78',
    fontWeight: 'bold',
    backgroundColor: '#F2DDF0',
    padding: 12,
    borderRadius: 9,
  },
  note: { fontSize: 11, color: '#888', marginTop: 10 },
});