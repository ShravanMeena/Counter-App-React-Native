import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Counter from './components/counter'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>
             <Counter step={1}/> 
             <Counter step={10}/> 
             <Counter step={-1}/> 
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
