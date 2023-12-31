import { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// icons import
import Icon from 'react-native-vector-icons/FontAwesome';

// components import
import Checkmark from '../components/Checkmark';
import TodoListItem from '../components/TodoListItem';
import FloatingButton from '../components/FlotingButton';

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('Tab')}>
            <Icon name="folder" color={'white'} size={25}></Icon>
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <FloatingButton onPress={() => {}}></FloatingButton>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
