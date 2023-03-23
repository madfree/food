import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, resultList, navigation }) => {
    if(!resultList.length) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={resultList}
                keyExtractor = {result => result.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={ 
                                () => navigation.navigate('ResultsShow', {id: item.id })}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>  
    );  
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: "bold"
    }
});

export default withNavigation(ResultsList);