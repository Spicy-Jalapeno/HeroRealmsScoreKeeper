import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

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
    transform: [{rotateZ: '180deg'}],
  },
  player2: {
    position: 'relative',
    height: '50%',
    width: '100%',
    // backgroundColor: 'black',
  },
  lifeBut80: {
    fontSize: 80,
    backgroundColor: 'transparent',
    color: 'green',
  },
  lifeBut50: {
    fontSize: 80,
    backgroundColor: 'transparent',
    color: 'green',
  },
  buttonRow: {
    backgroundColor: 'yellow',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const App = () => {
  const [clicked, setClicked] = React.useState(false);
  const [health, setHealth] = React.useState(0);

  const handle80Click = (e) => {
    setHealth(80);
    setClicked(true);
  };
  const handle50Click = (e) => {
    setHealth(50);
    setClicked(true);
  };
  return (
    <View style={styles.root}>
      <LifeCard
        position={styles.player1}
        clicked={clicked}
        setClicked={setClicked}
        health={clicked ? health : null}
        color={'red'}
      />
      <View style={styles.buttonRow}>
        <Button
          className="80"
          title="80"
          titleStyle={styles.lifeBut80}
          buttonStyle={styles.lifeBut80}
          onPress={handle80Click}
        />
        <Button
          className="50"
          title="50"
          titleStyle={styles.lifeBut50}
          buttonStyle={styles.lifeBut50}
          onPress={handle50Click}
        />
      </View>
      <LifeCard
        position={styles.player2}
        clicked={clicked}
        setClicked={setClicked}
        health={clicked ? health : null}
        color={'blue'}
      />
    </View>
  );
};

export default App;
