import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>My Profile</Text>

      <View style={s.profile}>
        <Ionicons name="person-circle" size={95} color="#8D1B78" />
        <Text style={s.name}>Student Name</Text>
        <Text style={s.muted}>student@superior.edu</Text>
        <Text style={s.link}>Student ID: SU-2026-001</Text>
      </View>

      <Text style={s.heading}>Settings</Text>

      <TouchableOpacity
        style={s.item}
        onPress={() => setNotifications(!notifications)}
      >
        <Ionicons name="notifications-outline" size={25} color="#8D1B78" />
        <Text style={s.itemText}>Notifications</Text>
        <Text style={s.link}>{notifications ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={s.item}
        onPress={() => Alert.alert('Help & Support', 'support@superior.edu')}
      >
        <Ionicons name="help-circle-outline" size={25} color="#8D1B78" />
        <Text style={s.itemText}>Help & Support</Text>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity
        style={s.logout}
        onPress={() => navigation.getParent()?.getParent()?.replace('Login')}
      >
        <Ionicons name="log-out-outline" size={22} color="white" />
        <Text style={s.logoutText}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F4F8' },
  content: { padding: 20 },
  title: { fontSize: 25, fontWeight: 'bold', marginBottom: 15 },
  profile: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginVertical: 12,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#29212A' },
  muted: { color: '#888', marginTop: 6, fontSize: 12 },
  link: { color: '#8D1B78', marginTop: 10, fontWeight: 'bold' },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 12 },
  item: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  itemText: { flex: 1, color: '#29212A' },
  logout: {
    backgroundColor: '#8D1B78',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 15,
  },
  logoutText: { color: 'white', fontWeight: 'bold' },
});