import React, {useEffect} from 'react';
import {Icon} from '@shoutem/ui/components/Icon';
import {Button} from '@shoutem/ui/components/Button';
import {Card} from '@shoutem/ui/components/Card';
import {Text} from '@shoutem/ui/components/Text';
import {StyleProvider, connectStyle} from '@shoutem/theme';
import {View} from 'react-native';

import {Root, Popup} from 'popup-ui';

// const styles = StyleSheet.create({
//   // tile: {
//   //   height: '100%',
//   //   width: '100%',
//   //   backgroundColor: 'black',
//   // },
//   tileContent: {
//     height: '100%',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     // alignContent: 'center',
//   },
//   upBut: {
//     height: 100,
//     width: 100,
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
//   downBut: {
//     height: 100,
//     width: 100,
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
//   score: {
//     fontSize: 100,
//     color: 'black',
//   },
//   tileView: {
//     height: '100%',
//     backgroundColor: 'yellow',
//   },
// });
const theme = {
  'shoutem.ui.Card': {
    // card component variants
    '.dark': {
      backgroundColor: '#000',
    },

    '.light': {
      backgroundColor: '#fff',
    },
    // style variant available to child components of any type
    justifyContent: 'center',
    alignContent: 'center',

    // default card style, we usually place these rules at the bottom

    flex: 3,
    width: '100%',
    // card shadow style
    // shadowColor: 'black',
    // shadowRadius: 9,
    // shadowOpacity: 0.3,
    // shadowOffset: { width: 5, height: 7 }
  },
  'shoutem.ui.Button': {
    height: 100,
    width: 100,
  },
  'shoutem.ui.Text': {
    '.dark': {
      color: 'white',
    },
    '.light': {
      color: 'black',
    },

    fontSize: 100,
    alignSelf: 'center',
  },
  'shoutem.ui.Icon': {
    '.up': {
      color: 'green',
    },
    '.down': {
      color: 'red',
    },
  },
};
// TODO: make sure that something will show when the user loses. Whoever gets to zero first it should show.
const LifeCard = ({clicked, setClicked, health, color, position, setLoss, player, setPlayer}) => {
  // console.log('beginLife >>>', beginLife);
  // connectStyle("shoutem.ui.Icon")(Icon);
  const [num, setNum] = React.useState(0);
 

  useEffect(() => {
    if (clicked) {
      setNum(health);
    }
  }, [clicked, health]);

  const handleInc = () => {
    setNum(num + 1);
    setClicked(false);
  };
  const handleDec = () => {
    if (num === 0) {
      setLoss(true);
      setPlayer(player)
     
    } else {
      setNum(num - 1);
      setClicked(false);
    }
  };

  return (
    <StyleProvider style={theme}>
      <Card styleName={color} style={position}>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          
          <Button onPress={handleInc}>
            <Icon styleName={'up'} size={90} name="arrow-up"></Icon>
          </Button>
          <Text styleName={color}>{num}</Text>
          <Button styleName="light" onPress={handleDec}>
            <Icon styleName={'down'} size={90} name="arrow-down"></Icon>
          </Button>
          {/* <Button
            buttonStyle={styles.downBut}
            onPress={handleDec}
            icon={<Icon name="arrow-down" size={90} />}
          /> */}

          {/* <TouchableOpacity
          style={styles.downBut}
          onPress={() =>
            Popup.show({
              type: 'Success',
              title: 'Upload complete',
              button: false,
              textBody: 'Congrats! Your upload successfully done',
              buttonText: 'Ok',
              callback: () => Popup.hide(),
            })
          }>
          <Text>Open Popup</Text>
        </TouchableOpacity> */}
        </View>
      </Card>
    </StyleProvider>
  );
};

export default LifeCard;
