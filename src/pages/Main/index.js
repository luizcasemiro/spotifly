import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Player from '../../components/Player';

// import { Container } from './styles';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Conteudo</Text>
      </View>
      <Player />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#121212'
  },
  content: {},
});
