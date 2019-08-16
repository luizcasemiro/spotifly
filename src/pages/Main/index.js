import React, { useState } from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Player from '../../components/Player';
import Section from '../../components/Section';

// import { Container } from './styles';

export default function Main() {
  const [sectionList, setSectionList] = useState([
    {
      id: '1',
      name: 'Tocadas recentemente',
      cards: [
        {
          id: '1',
          name: 'Festa Sertaneja',
          image: 'https://www.baixedetudo.net/imagem/festa-sertaneja.jpg'
        },
        {
          id: '2',
          name: 'O melhor do rock',
          image:
            'https://static.fnac-static.com/multimedia/Images/PT/NR/17/d2/10/1102359/1540-1/tsp20170523130327/The-Claic-Rock-Collection-3CD.jpg'
        },
        {
          id: '3',
          name: 'Forrozando',
          image:
            'https://pidamusic.com.br/fotos/pidamusic_cds/1457/ARTWORK_CD_0.jpg?v=4b51c9e059623cb'
        },
      ],
    },
    {
      id: '2',
      name: 'Podcasts',
      cards: [
        {
          id: '1',
          name: 'Flow Podcast',
          image: 'https://yt3.ggpht.com/a/AGF-l7-gi08245w3TiPWwB8qmPu-F24qOs-4XaJSFQ=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
          id: '2',
          name: 'Saco Cheio Podcast',
          image:
            'https://i.scdn.co/image/f0a84237a6b4a37f05689c3addc026d0bb85627b'
        },
        {
          id: '3',
          name: 'Tapa da Mão invisível',
          image:
            'http://i1.sndcdn.com/avatars-000543802815-sfak9m-original.jpg'
        },
      ],
    },
  ]);
  const [musicName, setMusicName] = useState([
    'Medalha de Prata - Ao Vivo',
    'Zé Felipe, Maiara & Maraisa'
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sectionList}
        renderItem={({ item }) => <Section data={item} />}
      />
      <Player musicName={musicName} />
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
  content: {
    flex: 1,
  },
  sections: {
    backgroundColor: '#FFFFFF',
    height: 100,
  },
});
