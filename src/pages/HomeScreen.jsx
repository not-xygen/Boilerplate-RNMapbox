import * as React from 'react';
import {Button} from 'react-native';
import MapScreen from './MapScreen';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <MapScreen />
    </>
  );
};

export default HomeScreen;
