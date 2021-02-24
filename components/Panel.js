import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

export default () => {
  return (
    <View style={styles.panel}>
      <View style={styles.btn}>
        <Button title="Lista" />
      </View>
      <View style={styles.btn}>
        <Button title="Mostrar/Ocultar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginHorizontal: 10,
  },
});
