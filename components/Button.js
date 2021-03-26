import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ title, size, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={[styles.textLink, { fontSize: size || 22 }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textLink: {
    color: "#0000EE",
  },
});
