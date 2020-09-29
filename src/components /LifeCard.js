import React from 'react';
import {Tile, Button} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  // tile: {
  //   height: '100%',
  //   width: '100%',
  //   backgroundColor: 'black',
  // },
  tileContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // alignContent: 'center',
  },
  upBut: {
    height: 100,
    width: 100,
  },
  downBut: {
    height: 100,
    width: 100,
  },
  score: {
    fontSize: 100,
    color: 'white',
  },
});

const LifeCard = (props) => {
  const [num, setNum] = React.useState(0);

  const handleInc = () => {
    setNum(num + 1);
  };
  const handleDec = () => {
    if (num === 0) {
      console.log('loser');
    } else {
      setNum(num - 1);
    }
  };
  return (
    <Tile
      contentContainerStyle={styles.tileContent ,{backgroundColor: props.color}}
      containerStyle={props.position}
      // imageContainerStyle={styles.tile}
      // imageSrc={props.imgsrc}
      // featured
    >
      <View style={styles.tileContent}>
        <Button buttonStyle={styles.upBut} onPress={handleInc}>
          Up
        </Button>
        <Text style={styles.score}>{num}</Text>
        <Button buttonStyle={styles.downBut} onPress={handleDec}>
          Down
        </Button>
      </View>
    </Tile>
  );
};

export default LifeCard;
