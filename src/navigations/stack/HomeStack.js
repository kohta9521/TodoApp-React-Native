import { createStackNavigator } from '@react-navigation/stack';

// screen import
import HomeScreen from '../../screens/HomeScreen';
import TabScreen from '../../screens/TabScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tab" component={TabScreen} />
    </Stack.Navigator>
  );
}
