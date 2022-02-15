import * as React from 'react';
import { View } from 'react-native';
import CharacterCard from './CharacterCard';

export default function Home() {
  return (
    <View>
      <CharacterCard name='Iron Man' image={require('../assets/favicon.png')} />
      <CharacterCard name='Captain America' image={require('../assets/favicon.png')}/>
    </View>
  );
}