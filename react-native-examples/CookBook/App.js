import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ch0202 } from './components/Ch0202';
import { Ch0301 } from './components/Ch0301';
import { Ch0303 } from './components/Ch0303';
import { Ch0304 } from './components/Ch0304';
import { Ch0401 } from './components/Ch0401';
import { Ch0501 } from './components/Ch0501';
import { Ch0502 } from './components/Ch0502';
import { Ch0601Parent } from './components/Ch0601';
import { Ch0602 } from './components/Ch0602';
import { Ch0701 } from './components/Ch0701';
import { Ch0803 } from './components/Ch0803';
import { Ch0804 } from './components/Ch0804';
export default function App() {
  return (
    <View style={styles.container}>
      <Ch0202></Ch0202>
      <Ch0301 name="PancakesYaa!" isYummy={true} />
      <Ch0303 name='Rexxar' />
      <Ch0303 name='Jaina' />
      <Ch0303 name='Valeera' />
      <Ch0304></Ch0304>
      <Ch0304 name='customized'></Ch0304>
      <Ch0401></Ch0401>
      <Ch0501></Ch0501>
      <Ch0502></Ch0502>
      <Ch0601Parent></Ch0601Parent>
      <Ch0602></Ch0602>
      <Ch0701></Ch0701>
      <Ch0803></Ch0803>
      <Ch0804></Ch0804>
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
