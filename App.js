import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigations/RootNavigation';

// components import
import HomeScreen from './src/screens/HomeScreen';
import TabScreen from './src/screens/TabScreen';

export default function App() {
  return <RootNavigation></RootNavigation>;
}
