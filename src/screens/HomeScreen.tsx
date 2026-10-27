import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const courses = [
  { name: 'Digital Thinking', time: '09:00 AM', icon: 'bulb-outline' as const },
  { name: 'Computer Science', time: '11:30 AM', icon: 'laptop-outline' as const },
  { name: 'Web Development', time: '02:00 PM', icon: 'code-slash-outline' as const },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.header}>
        <View>
          <Text style={s.muted}>Welcome back,</Text>
          <Text style={s.title}>Student 👋</Text>
        </View>
        <Ionicons name="person-circle" size={45} color="#8D1B78" />
      </View>

      <Text style={s.heading}>Today's Classes</Text>

      {courses.map(course => (
        <TouchableOpacity
          key={course.name}
          style={s.card}
          onPress={() => navigation.navigate('Courses')}
        >
          <Ionicons name={course.icon} size={30} color="#8D1B78" />
          <View style={{ flex: 1 }}>
            <Text style={s.cardTitle}>{course.name}</Text>
            <Text style={s.muted}>{course.time}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={s.banner}
        onPress={() => navigation.navigate('Schedule')}
      >
        <Ionicons name="calendar-outline" size={30} color="#8D1B78" />
        <View style={{ flex: 1 }}>
          <Text style={s.cardTitle}>Open schedule</Text>
          <Text style={s.muted}>View all your classes</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#8D1B78" />
      </TouchableOpacity>

      <Text style={s.heading}>News & Events</Text>

      {['University announcements', 'Upcoming events', 'Student news'].map(
        (news, i) => (
          <View style={s.news} key={news}>
            <Ionicons name="newspaper-outline" size={25} color="#8D1B78" />
            <Text style={s.cardTitle}>{news}</Text>
          </View>
        )
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F4F8' },
  content: { padding: 18, paddingBottom: 30 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  title: { fontSize: 23, fontWeight: 'bold', color: '#29212A' },
  muted: { color: '#888', fontSize: 12, marginTop: 5 },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 15 },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 12,
  },
  cardTitle: { fontWeight: 'bold', color: '#29212A' },
  banner: {
    backgroundColor: '#F2DDF0',
    padding: 17,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 10,
  },
  news: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
});