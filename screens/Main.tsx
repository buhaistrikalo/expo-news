import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';

import PostCard from 'components/PostCard';

import { gStyle } from 'styles/style';
import { IPost } from 'types';
import ModalAddPost from 'components/ModalAddPost';

const Main = ({ navigation }) => {
    // Modal Window
    const [modalWindow, setModalWindow] = useState(false);
    const handleModalWindow = (value: boolean) => () => setModalWindow(value);
    const [news, setNews] = useState([
        {
            title: 'on the Internet',
            author: 'John Pohn',
            body: 'News 1 is the latest news available on the Internet and will be available',
            key: '0',
        },
        {
            title: 'About paradise',
            author: 'Kirill Tcoi',
            body: 'Paradise is the latest news available on the Internet and will be available',
            key: '1',
        },
        {
            title: 'About you',
            author: 'Kris Rock',
            body: 'You is the latest news available on the Internet and will be available',
            key: '2',
        },
    ] as IPost[]);

    const handleCreateNews = (post: IPost) => {
        setNews([post, ...news]);
        setModalWindow(false)
    };

    return (
        <View style={gStyle.main}>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Post', item)}>
                        <PostCard title={item.title} subtitle={item.author} key={item.key} />
                    </TouchableOpacity>
                )}
            />
            <ModalAddPost
                show={modalWindow}
                setShow={handleModalWindow}
                submit={handleCreateNews}
            />
        </View>
    );
};

export default Main;
