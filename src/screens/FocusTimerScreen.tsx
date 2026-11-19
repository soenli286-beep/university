import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function FocusTimerScreen() {
  const [seconds, setSeconds] = useState(1500); // 25 минут
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Focus Study Timer</Text>
        
        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity 
            style={[styles.btn, { backgroundColor: isActive ? '#FF9800' : '#8D1B78' }]} 
            onPress={() => setIsActive(!isActive)}
          >
            <Text style={styles.btnText}>{isActive ? 'Пауза' : 'Нажать'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.btn, { backgroundColor: '#E0E0E0' }]} 
            onPress={() => { setIsActive(false); setSeconds(1500); }}
          >
            <Text style={[styles.btnText, { color: '#333' }]}>Сброс</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 40 },
  timerCircle: { width: 220, height: 220, borderRadius: 110, backgroundColor: '#FAF7FB', borderWidth: 6, borderColor: '#8D1B78', justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
  timerText: { fontSize: 48, fontWeight: '800', color: '#8D1B78' },
  btnRow: { flexDirection: 'row', gap: 15 },
  btn: { paddingHorizontal: 30, paddingVertical: 14, borderRadius: 12 },
  btnText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
});