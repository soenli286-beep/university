import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type FeatureItem = {
  title: string;
  description: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

type Props = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  items: FeatureItem[];
};

export default function FeatureScreen({ title, subtitle, icon, items }: Props) {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.top}>
        <View style={styles.iconCircle}>
          <Ionicons name={icon} size={30} color="#8D1B78" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {items.map((item, index) => (
        <View key={`${item.title}-${index}`} style={styles.card}>
          <View style={styles.itemIcon}>
            <Ionicons name={item.icon || 'document-text-outline'} size={21} color="#8D1B78" />
          </View>
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
      <Text style={styles.note}>Ақпарат үлгі ретінде берілген. Нақты деректерді университет жүйесіне қосуға болады.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F6F7F9' },
  content: { padding: 20, paddingTop: 56, paddingBottom: 36 },
  top: { alignItems: 'center', marginBottom: 24 },
  iconCircle: { width: 68, height: 68, borderRadius: 22, backgroundColor: '#F3E5F0', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  title: { fontSize: 25, fontWeight: '700', color: '#20232A', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#737782', textAlign: 'center', marginTop: 7, lineHeight: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  itemIcon: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#F8EFF6', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  itemText: { flex: 1 },
  itemTitle: { fontSize: 15, fontWeight: '700', color: '#282A31', marginBottom: 4 },
  description: { fontSize: 13, color: '#777B85', lineHeight: 18 },
  note: { color: '#9699A1', fontSize: 11, lineHeight: 16, textAlign: 'center', marginTop: 12 },
});
