import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ch0202 } from './components/Ch0202';

export default function App() {
  return (
    <View style={styles.container}>
      <Ch0202></Ch0202>
      <Text>Open up App.js to start working on your app! What?</Text>
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
