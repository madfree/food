import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: result.image_url }}
                style={styles.imageStyle}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },  
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold"
    }
});

export default ResultDetail;