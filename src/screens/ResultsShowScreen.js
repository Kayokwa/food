import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function ResultsShowScreen({ route }) {
  return (
    <View>
      <Text>Show results here: {route.params.itemId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
