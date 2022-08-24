import React, { FC } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import base from 'styles/base';

interface PostCardProps {
    title: string;
    subtitle: string;
}

const PostCard: FC<PostCardProps> = ({ title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
    },
    subtitle: {
        color: base.colors.grey,
    },
});

export default PostCard;
