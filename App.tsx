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

import ServicesScreen from './src/screens/ServicesScreen';
import ScholarshipScreen from './src/screens/ScholarshipScreen';
import StudentIDScreen from './src/screens/StudentIDScreen';
import AcademicCalendarScreen from './src/screens/AcademicCalendarScreen';
import StudyMaterialsScreen from './src/screens/StudyMaterialsScreen';
import CareerCenterScreen from './src/screens/CareerCenterScreen';
import InternshipScreen from './src/screens/InternshipScreen';
import LostFoundScreen from './src/screens/LostFoundScreen';
import FAQScreen from './src/screens/FAQScreen';
import TuitionFeeScreen from './src/screens/TuitionFeeScreen';
import StudentSupportScreen from './src/screens/StudentSupportScreen';

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
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: 'home-outline',
            Courses: 'book-outline',
            Schedule: 'calendar-outline',
            Results: 'stats-chart-outline',
            Profile: 'person-outline',
            More: 'apps-outline',
          };

          return <Ionicons name={icons[route.name] || 'ellipse-outline'} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={ServicesScreen} options={{ title: 'Қосымша' }} />
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

        <Stack.Screen name="Scholarship" component={ScholarshipScreen} />
        <Stack.Screen name="StudentID" component={StudentIDScreen} />
        <Stack.Screen name="AcademicCalendar" component={AcademicCalendarScreen} />
        <Stack.Screen name="StudyMaterials" component={StudyMaterialsScreen} />
        <Stack.Screen name="CareerCenter" component={CareerCenterScreen} />
        <Stack.Screen name="Internship" component={InternshipScreen} />
        <Stack.Screen name="LostFound" component={LostFoundScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="TuitionFee" component={TuitionFeeScreen} />
        <Stack.Screen name="StudentSupport" component={StudentSupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
