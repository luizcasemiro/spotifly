import React from 'react';

import { View, StyleSheet, Text, FlatList } from 'react-native';

import Card from '../Card';

const Section = ({ data: section }) => (
  <View style={styles.sections}>
    <Text style={styles.sectionsName}>{section.name}</Text>
    <FlatList
      horizontal
      style={styles.sectionCards}
      data={section.cards}
      renderItem={({ item }) => <Card data={item} />}
    />
  </View>
);

export default Section;
const styles = StyleSheet.create({
  sections: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  sectionsName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
