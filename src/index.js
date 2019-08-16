import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
