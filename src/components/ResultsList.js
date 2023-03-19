import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, resultList }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                data={resultList}
                keyExtractor = {result => result.id}
                renderItem = {({item}) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>  
    );  
};

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: "bold"
    }
});

export default ResultsList;