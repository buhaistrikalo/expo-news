import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';

import PostCard from 'components/PostCard';

import { gStyle } from 'styles/style';
import { IPost } from 'types';

const NEWS = [
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
] as IPost[];

const Main = ({ navigation }) => {
    return (
        <View style={gStyle.main}>
            {/* <Text style={gStyle.title}>Last posts</Text> */}
            <FlatList
                data={NEWS}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Post', item)}>
                        <PostCard title={item.title} subtitle={item.author} key={item.key} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Main;
