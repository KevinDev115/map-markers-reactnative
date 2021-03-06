import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { default as Button } from "../components/Button";

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} style={styles.btn} onPress={onPressLeft} />
      <Button
        title="Mostrar/Ocultar"
        style={styles.btn}
        onPress={togglePointsFilter}
      />
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
    marginHorizontal: 25,
  },
});
