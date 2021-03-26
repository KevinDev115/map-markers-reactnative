import React from "react";
import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";

import Button from "../components/Button";

export default ({ points, closeModal }) => {
  console.log(points);
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Cerrar" size={24} onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    minWidth: Dimensions.get("window").width - 100,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 20,
  },
  btnContainer: {
    alignItems: "center",
    padding: 10,
  },
});
