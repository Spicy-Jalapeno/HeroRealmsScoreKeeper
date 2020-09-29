import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// import {Card} from 'react-native-elements';
import LifeCard from './src/components /LifeCard';
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    height: '100%',
  },
  player1: {
    position: 'relative',
    height: '50%',
    width: '100%',
    transform: [{ rotateZ: '180deg' }],
  },
  player2: {
    position: 'relative',
    height: '50%',
    width: '100%',
    // backgroundColor: 'black',
  },
});

const App: () => React$Node = () => {
  return (
    <View style={styles.root}>
      <LifeCard position={styles.player1} color={'red'} />
      <LifeCard position={styles.player2} color={'blue'} />
    </View>
  );
};

export default App;
