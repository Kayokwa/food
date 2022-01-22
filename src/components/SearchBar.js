import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function SearchBar() {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
