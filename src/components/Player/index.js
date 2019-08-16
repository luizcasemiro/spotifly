import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

const Player = () => (
  <View style={styles.player}>
    <TouchableOpacity style={styles.fullPlayerIcon}>
      <Icon name="keyboard-arrow-up" color="#FFF" size={34} />
    </TouchableOpacity>
    <Text style={styles.musicName}>
      {'Medalha de Prata - Maiara & Maraisa'}
    </Text>
    <TouchableOpacity style={styles.playIcon}>
      <Icon name="play-circle-outline" color="#FFF" size={34} />
    </TouchableOpacity>
  </View>
);

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
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
