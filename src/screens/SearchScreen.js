import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return( <>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList resultList={filterResultsByPrice('€')} title="Cost Effective"/>
            <ResultsList resultList={filterResultsByPrice('€€')} title="Bit Pricier" />
            <ResultsList resultList={filterResultsByPrice('€€€')} title="Big Spender"/>
        </ScrollView>
    </>
)};

const styles = StyleSheet.create({
  
});

export default SearchScreen;