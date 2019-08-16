import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextTicker from 'react-native-text-ticker';
// import { Container } from './styles';

const Player = ({ musicName }) => {
  return (
    <View style={styles.player}>
      <TouchableOpacity style={styles.fullPlayerIcon}>
        <Icon name="keyboard-arrow-up" color="#FFF" size={34} />
      </TouchableOpacity>
      <View style={styles.musicName}>
        <TextTicker
          style={styles.musicNameText}
          useNativeDriver={true}
          duration={150 * (musicName[0].length + musicName[1].length)}
          animationType="auto"
          loop
        >
          {musicName[0]} <Text style={{ color: '#999' }}>∙ {musicName[1]}</Text>
        </TextTicker>
      </View>
      <TouchableOpacity style={styles.playIcon}>
        <Icon name="play-circle-outline" color="#FFF" size={34} />
      </TouchableOpacity>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#222326',
    paddingHorizontal: 8,
  },
  musicName: {
    width: '70%'
  },
  musicNameText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
