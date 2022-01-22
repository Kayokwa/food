import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { ResultList } from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  function filterResultsByPrice(price) {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
