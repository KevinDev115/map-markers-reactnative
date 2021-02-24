import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";

export default ({ longPress }) => {
  return (
    <>
      <MapView style={styles.map} onLongPress={longPress} />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});
