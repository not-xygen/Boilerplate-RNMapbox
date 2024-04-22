import React from "react";
import { StyleSheet, View } from "react-native";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiY2hleWl6dGluZSIsImEiOiJjbHBkcWNkdGoweDJjMnBwcG5wODBtOThvIn0.2JxsYyYJLyKruUTP7zJivw",
);

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 500,
    width: 500,
  },
  map: {
    flex: 1,
  },
});
