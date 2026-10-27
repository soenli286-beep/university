import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const courses = [
  { name: 'Digital Thinking', teacher: 'Course instructor', progress: 65 },
  { name: 'Computer Science', teacher: 'Course instructor', progress: 40 },
  { name: 'Web Development', teacher: 'Course instructor', progress: 25 },
  { name: 'Communication Skills', teacher: 'Course instructor', progress: 80 },
];

export default function CoursesScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>My Courses</Text>

      {courses.map(course => (
        <View style={s.card} key={course.name}>
          <Ionicons name="book-outline" size={35} color="#8D1B78" />
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{course.name}</Text>
            <Text style={s.muted}>{course.teacher}</Text>
            <View style={s.track}>
              <View style={[s.fill, { width: `${course.progress}%` }]} />
            </View>
            <Text style={s.muted}>{course.progress}% completed</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F4F8' },
  content: { padding: 20 },
  title: { fontSize: 25, fontWeight: 'bold', marginBottom: 15 },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
  },
  name: { fontSize: 15, fontWeight: 'bold', color: '#29212A' },
  muted: { color: '#888', fontSize: 12, marginTop: 6 },
  track: {
    height: 6,
    backgroundColor: '#EEE',
    borderRadius: 5,
    marginTop: 12,
  },
  fill: { height: 6, backgroundColor: '#8D1B78', borderRadius: 5 },
});