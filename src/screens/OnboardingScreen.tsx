import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

const pages = [
  {
    emoji: '🎓',
    title: 'Better way to learning\nis calling you!',
    subtitle: 'Unlock Your Potential, Embrace Education',
  },
  {
    emoji: '📚',
    title: 'Find yourself by doing\nwhatever you do!',
    subtitle: 'Education with Grace and Style',
  },
  {
    emoji: '💡',
    title: "It's not just learning,\nit's a promise!",
    subtitle: 'Learn Today, Lead Tomorrow',
  },
];

export default function OnboardingScreen({ navigation }: any) {
  const [page, setPage] = useState(0);
  const item = pages[page];

  function next() {
    if (page < pages.length - 1) {
      setPage(page + 1);
    } else {
      navigation.replace('Login');
    }
  }

  return (
    <View style={s.container}>
      <View style={s.indicators}>
        {pages.map((_, i) => (
          <View
            key={i}
            style={[s.line, page === i && s.activeLine]}
          />
        ))}
      </View>

      <View style={s.illustration}>
        <Text style={{ fontSize: 85 }}>{item.emoji}</Text>
      </View>

      <Text style={s.title}>{item.title}</Text>
      <Text style={s.subtitle}>{item.subtitle}</Text>

      <View style={s.bottom}>
        <TouchableOpacity style={s.button} onPress={next}>
          <Text style={s.buttonText}>
            {page === 2 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={s.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 22 },
  indicators: { flexDirection: 'row', gap: 8, marginTop: 15 },
  line: { flex: 1, height: 3, backgroundColor: '#EADCE8' },
  activeLine: { backgroundColor: '#8D1B78' },
  illustration: {
    alignSelf: 'center',
    marginTop: 90,
    width: 220,
    height: 190,
    backgroundColor: '#F8E6F4',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 35,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: { textAlign: 'center', color: '#888', marginTop: 12 },
  bottom: { marginTop: 'auto', marginBottom: 20, gap: 18 },
  button: {
    backgroundColor: '#8D1B78',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  skip: { textAlign: 'center', color: '#8D1B78' },
});