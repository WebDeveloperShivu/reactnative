import React from "react";
import { Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <Text style={styles.heading}>
      React Native
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "red",
    fontSize: 45,
    marginHorizontal:34,
    marginVertical:34,
  },
});

export default App;
