import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomeComponent from "./src/screens/CustomeComponent";

const App = () => {
  return (
    <View>
    <Text style={styles.heading}>
      React Native
    </Text>
    <CustomeComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "red",
    fontSize: 45,
    marginHorizontal:49,
    marginVertical:50,
    
  },
});

export default App;
