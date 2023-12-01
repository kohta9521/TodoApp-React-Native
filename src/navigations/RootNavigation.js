import * as Reat from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './stack/HomeStack';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <HomeStack></HomeStack>
    </NavigationContainer>
  );
}
