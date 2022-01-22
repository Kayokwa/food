import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useState } from "react/cjs/react.development";
import yelp from "../api/yelp";

export function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const itemId = route.params.itemId;

  const getResult = async (itemId) => {
    const response = await yelp.get(`/${itemId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(itemId);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    margin: 4,
  },
});
