import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Map, ModalView, Panel } from "./components/index";

export default function App() {
  const [points, setPoints] = useState([]);

  console.log(points);

  const handleLongPress = ({ nativeEvent }) => {
    const newPoints = points.concat({
      coordinate: nativeEvent.coordinate,
    });
    setPoints(newPoints);
  };

  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} />
      <Panel />
      <ModalView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
