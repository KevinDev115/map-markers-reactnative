import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default ({ longPress, points, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={longPress}>
      {pointsFilter &&
        points.map((p, index) => (
          <Marker coordinate={p.coordinate} title={p.name} key={index} />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});
