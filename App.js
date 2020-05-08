import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dunia from './src/components/Dunia';
import Indonesia from './src/components/Indonesia';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titletext}>Data COVID-19 Global dan Indonesia</Text>
      <Text style={styles.text}>Global</Text>
        <Dunia />
      <Text style={styles.text}>Indonesia </Text>
        <Indonesia />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titletext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown'
  }
});

export default App;
