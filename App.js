import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/**
 *
 *
 * @export
 * @return {*}
 */
export default function App() {
  /**
   * 挨拶メソッド
   *
   * @param {string} name
   */
  function hello(name) {
    console.log(name + ' hello');
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
