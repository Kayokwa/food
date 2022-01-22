import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar";
import yelp from "../api/yelp";

function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [erroMessage, setErrorMessage] = useState("");
  async function searchApi() {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err);
    }
  }
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {erroMessage ? <Text>{erroMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
