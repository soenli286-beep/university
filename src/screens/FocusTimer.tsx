import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FocusTimer() {
  const WORK_TIME = 25 * 60; // 25 минут в секундах
  const BREAK_TIME = 5 * 60;  // 5 минут отдыха

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (!isBreak) {
        Alert.alert('Отличная работа!', '25 минут учебы завершены. Время отдохнуть 5 минут!');
        setIsBreak(true);
        setTimeLeft(BREAK_TIME);
      } else {
        Alert.alert('Перерыв окончен!', 'Готовы продолжить учебу?');
        setIsBreak(false);
        setTimeLeft(WORK_TIME);
      }
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(isBreak ? BREAK_TIME : WORK_TIME);
  };

  // Форматирование секунд в вид 00:00
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Таймер фокусировки (Pomodoro)</Text>
      
      <View style={[styles.timerCircle, isBreak && styles.breakCircle]}>
        <Text style={styles.modeText}>{isBreak ? '☕ Перерыв' : '📚 Учеба'}</Text>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.mainBtn} onPress={toggleTimer}>
          <Ionicons name={isActive ? "pause" : "play"} size={24} color="#fff" />
          <Text style={styles.btnText}>{isActive ? 'Пауза' : 'Старт'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetBtn} onPress={resetTimer}>
          <Ionicons name="reload-outline" size={22} color="#8D1B78" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9fb', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#8D1B78', marginBottom: 30 },
  timerCircle: { 
    width: 220, 
    height: 220, 
    borderRadius: 110, 
    backgroundColor: '#fff', 
    borderWidth: 8, 
    borderColor: '#8D1B78', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 40,
    shadowColor: '#8D1B78',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4
  },
  breakCircle: { borderColor: '#4CAF50' },
  modeText: { fontSize: 16, color: '#666', fontWeight: '600', marginBottom: 10 },
  timerText: { fontSize: 44, fontWeight: 'bold', color: '#333' },
  controlsRow: { flexDirection: 'row', alignItems: 'center' },
  mainBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#8D1B78', 
    paddingHorizontal: 30, 
    paddingVertical: 15, 
    borderRadius: 30, 
    marginRight: 15 
  },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 8 },
  resetBtn: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: '#8D1B78' 
  },
});