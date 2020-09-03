/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <View style={styles.body}>
        <Text>Hello world!</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.shops}>
          <Text>SHOP</Text>
        </View>
        <View style={styles.users}>
          <Text>LOGIN</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 11,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
  },
  shops: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  users: {
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
});

export default App;
