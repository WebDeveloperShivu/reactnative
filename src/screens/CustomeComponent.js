import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomeComponent = () => {
  return (
    <Text style={styles.heading}>
      CustomeComponent
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "red",
    fontSize: 35,
    marginHorizontal:34,
      },
});

export default CustomeComponent;
