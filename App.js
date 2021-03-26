import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { Map, ModalView, Panel, Input, Button, List } from "./components/index";

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [namePoint, setNamePoint] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState("new_point");

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setNamePoint(text);
  };
  const handleSubmit = () => {
    const newPoint = {
      coordinate: pointTemp,
      name: namePoint,
    };

    setPoints(points.concat(newPoint));
    setVisibility(false);
    setNamePoint("");
  };

  const handleList = () => {
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  const handleCloseModal = () => {
    setVisibility(false);
  };

  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} />
      <Panel onPressLeft={handleList} textLeft="Lista" />
      <ModalView visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />

            <View style={styles.btnContainer}>
              <Button title="Aceptar" size={18} onPress={handleSubmit} />
            </View>
          </View>
        ) : (
          <List points={points} closeModal={handleCloseModal} />
        )}
      </ModalView>
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
  form: {
    minWidth: Dimensions.get("window").width - 100,
    padding: 20,
  },
  btnContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
});
