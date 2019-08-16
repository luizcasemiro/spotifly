import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import festaSertaneja from '../../assets/festa-sertaneja.jpg';
// import { Container } from './styles';

const Card = ({ data: card }) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={{ uri: card.image }} />
    <Text style={styles.cardName}>{card.name}</Text>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 8,
    alignItems: 'center'
  },
  cardImage: {
    height: 140,
    width: 140,
  },
  cardName: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold'
  },
});
