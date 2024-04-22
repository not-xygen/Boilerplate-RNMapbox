import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiY2hleWl6dGluZSIsImEiOiJjbHBkcWNkdGoweDJjMnBwcG5wODBtOThvIn0.2JxsYyYJLyKruUTP7zJivw',
);

const MapScreen = ({navigation, route}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
