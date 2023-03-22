import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ResultDetail from "./ResultsDetail";

const ResultsList = ({ title, resultList, navigation }) => {
    //console.log({resultList})

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
                            onPress={ () => navigation.navigate('ResultsShow') }>
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

export default ResultsList;