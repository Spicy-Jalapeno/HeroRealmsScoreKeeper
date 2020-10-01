import React, {useEffect} from 'react';
import {Tile, Button} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  downBut: {
    height: 100,
    width: 100,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  score: {
    fontSize: 100,
    color: 'white',
  },
});

const LifeCard = ({clicked, setClicked, health, color, position}) => {
  // console.log('beginLife >>>', beginLife);
  const [num, setNum] = React.useState(0);

  useEffect(() => {
    if (clicked) {
      setNum(health);
    }
  });

  const handleInc = () => {
    setNum(num + 1);
    setClicked(false);
  };
  const handleDec = () => {
    if (num === 0) {
      console.log('loser');
    } else {
      setNum(num - 1);
      setClicked(false);
    }
  };

  return (
    <Tile
      contentContainerStyle={(styles.tileContent, {backgroundColor: color})}
      containerStyle={position}
      // imageContainerStyle={styles.tile}
      // imageSrc={props.imgsrc}
      // featured
    >
      <View style={styles.tileContent}>
        <Button
          buttonStyle={styles.upBut}
          onPress={handleInc}
          icon={<Icon name="arrow-up" size={90} />}
        />

        <Text style={styles.score}>{num}</Text>
        <Button
          buttonStyle={styles.downBut}
          onPress={handleDec}
          icon={<Icon name="arrow-down" size={90} />}
        />
      </View>
    </Tile>
  );
};

export default LifeCard;
