import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function ResultsDetail({ result }) {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});
