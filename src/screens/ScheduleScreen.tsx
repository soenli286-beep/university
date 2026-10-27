import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const lessons = [
  { time: '09:00 AM', name: 'Digital Thinking', room: 'Room 204' },
  { time: '11:30 AM', name: 'Computer Science', room: 'Lab 3' },
  { time: '02:00 PM', name: 'Web Development', room: 'Room 108' },
];

export default function ScheduleScreen() {
  const [selected, setSelected] = useState('Monday');

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>Class Schedule</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {days.map(day => (
          <TouchableOpacity
            key={day}
            style={[s.day, selected === day && s.active]}
            onPress={() => setSelected(day)}
          >
            <Text style={{ color: selected === day ? 'white' : '#8D1B78' }}>
              {day.slice(0, 3)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={s.heading}>{selected}'s classes</Text>

      {lessons.map(lesson => (
        <View style={s.card} key={lesson.name}>
          <Text style={s.time}>{lesson.time}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{lesson.name}</Text>
            <Text style={s.muted}>{lesson.room}</Text>
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
  heading: { fontSize: 17, fontWeight: 'bold', marginTop: 20 },
  day: {
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 9,
    marginRight: 8,
    marginTop: 15,
  },
  active: { backgroundColor: '#8D1B78' },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    gap: 14,
  },
  time: { color: '#8D1B78', fontWeight: 'bold', fontSize: 12 },
  name: { fontWeight: 'bold', color: '#29212A' },
  muted: { color: '#888', fontSize: 12, marginTop: 5 },
});