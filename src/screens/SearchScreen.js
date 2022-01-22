import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { ResultList } from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

function SearchScreen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  function filterResultsByPrice(price) {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
