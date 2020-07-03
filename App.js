import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

import Navigator from './src/routes';

export default function App() {
  return (
    <Navigator/>
  );
}