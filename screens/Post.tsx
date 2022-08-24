import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gStyle } from 'styles/style';
import base from 'styles/base';

const Posts = ({ route }) => {
    return (
        <View style={gStyle.main}>
            {/* <Text >{route.params.title}</Text> */}
            <Text style={styles.author}>by {route.params.author}</Text>
            <Text style={styles.body}>{route.params.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    author: { textAlign: 'right', color: base.colors.grey },
    body: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
    },
});

export default Posts;
