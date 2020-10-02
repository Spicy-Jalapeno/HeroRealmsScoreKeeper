import React, {LogBox} from 'react';
import {View, StyleSheet, Platform, Dimensions, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Modal, {ModalContent} from 'react-native-modals';
// import {Card} from 'react-native-elements';
import LifeCard from './src/components /LifeCard';
const styles = StyleSheet.create({
  root: {
    // width: '100%',
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'flex-start',
    backgroundColor: 'yellow',
    // height: '100%',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  player1: {
    // position: 'relative',
    // height: '50%',
    // width: '100%',
    transform: [{rotateZ: '180deg'}],
    // backgroundColor: 'green',
    // flex: 2,
    // backfaceVisibility: 'hidden',
    // borderBottomColor: 'green',
    // borderRadius: 0,
    // shadowOpacity: 0,
    // elevation: 0,
  },
  // player2: {
  //   position: 'relative',
  //   height: '50%',
  //   width: '100%',
  //   backgroundColor: 'red',
  //   padding: 0,
  //   flex: 2,
  // },
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
    backgroundColor: 'blue',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '8%',
    alignItems: 'center',
  },
});

const App = () => {
  console.ignoredYellowBox = [' Icon must be an SVG file imported as a React component.'];
  const [clicked, setClicked] = React.useState(false);
  const [health, setHealth] = React.useState(0);
  const [loss, setLoss] = React.useState(false);
  const [player, setPlayer] = React.useState('');
  const handle80Click = (e) => {
    setHealth(80);
    setClicked(true);
  };
  const handle50Click = (e) => {
    setHealth(50);
    setClicked(true);
  };
  const getPlayer = () => {
    if (player === 'Player1') {
      return { transform: [{ rotateZ: '180deg' }] };
    } else {
      return;
    }
  }
  return (
    <View style={styles.root}>
     <Modal style={getPlayer()}
            visible={loss}
            onTouchOutside={() => {
              setLoss(false);
            }}>
            <ModalContent>
              <Text>FUCKING LOSER</Text>
            </ModalContent>
          </Modal>
        <LifeCard
          position={styles.player1}
          clicked={clicked}
          setClicked={setClicked}
          health={clicked ? health : null}
          setPlayer= {setPlayer}
          setLoss={setLoss}
        color={'dark'}
        player={'Player1'}
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
        setLoss={setLoss}
        setPlayer= {setPlayer}
        color={'light'}
        player={'Player2'}
      />
    </View>
  );
};

export default App;
