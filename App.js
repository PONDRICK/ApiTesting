import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './src/api/Weather';
export default function App() {
  return (
    <View style={styles.container}>
      <Weather/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFD8C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
