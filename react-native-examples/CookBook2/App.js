import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ch1001 } from './Ch1001';
import { Ch1002 } from './Ch1002';
import { Ch1003 } from './Ch1003';
import { Ch1201 } from './Ch1201';
export default function App() {
  return (
    <View style={styles.container}>
      <MyText title="11111"></MyText>
      <Ch1001></Ch1001>
      <Ch1002></Ch1002>
      <Ch1003></Ch1003>
      <Ch1201></Ch1201>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

function MyText({title}) {
return (<Text>{title}</Text>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
