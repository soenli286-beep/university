import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotScreen from './src/screens/ForgotScreen';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AssignmentsScreen from './src/screens/AssignmentsScreen';
import CampusMapScreen from './src/screens/CampusMapScreen';
import FocusTimerScreen from './src/screens/FocusTimerScreen';
import GpaCalculatorScreen from './src/screens/GpaCalculatorScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import ExamScheduleScreen from './src/screens/ExamScheduleScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AttendanceScreen from './src/screens/AttendanceScreen';
import TranscriptScreen from './src/screens/TranscriptScreen';
import CafeteriaMenuScreen from './src/screens/CafeteriaMenuScreen';
import RoomBookingScreen from './src/screens/RoomBookingScreen';
import ShuttleBusScreen from './src/screens/ShuttleBusScreen';
import LectureNotesScreen from './src/screens/LectureNotesScreen';
import TeacherContactScreen from './src/screens/TeacherContactScreen';
import DormitoryScreen from './src/screens/DormitoryScreen';
import EventsScreen from './src/screens/EventsScreen';
import ClubsScreen from './src/screens/ClubsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#8D1B78',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, any> = {
            Home: 'home-outline',
            Courses: 'book-outline',
            Schedule: 'calendar-outline',
            Results: 'stats-chart-outline',
            Profile: 'person-outline',
          };

          return (
            <Ionicons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Assignments" component={AssignmentsScreen} />
        <Stack.Screen name="CampusMap" component={CampusMapScreen} />
        <Stack.Screen name="FocusTimer" component={FocusTimerScreen} />
        <Stack.Screen name="GpaCalculator" component={GpaCalculatorScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="ExamSchedule" component={ExamScheduleScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="Transcript" component={TranscriptScreen} />
        <Stack.Screen name="CafeteriaMenu" component={CafeteriaMenuScreen} />
        <Stack.Screen name="RoomBooking" component={RoomBookingScreen} />
        <Stack.Screen name="ShuttleBus" component={ShuttleBusScreen} />
        <Stack.Screen name="LectureNotes" component={LectureNotesScreen} />
        <Stack.Screen name="TeacherContact" component={TeacherContactScreen} />
        <Stack.Screen name="Dormitory" component={DormitoryScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Clubs" component={ClubsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}