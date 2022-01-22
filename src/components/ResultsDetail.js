import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export function ResultsDetail({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
