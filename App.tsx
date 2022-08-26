import React from 'react';

import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, ActivityIndicator, RefreshControl } from 'react-native';

import Post from 'components/Post';
import { IPost } from 'types';
import Center from 'components/Center';

export default function App() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [items, setItems] = React.useState([] as IPost[]);

    const fetchPosts = () => {
        setIsLoading(true);
        axios
            .get('https://63088fe2722029d9ddd2290e.mockapi.io/post')
            .then(({ data }) => setItems(data))
            .catch(() => console.error('Error getting posts from server'))
            .finally(() => setIsLoading(false));
    };

    React.useEffect(fetchPosts, []);

    const RenderItem = ({ item }: { item: IPost }) => (
        <Post
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
        />
    );

    if (isLoading)
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => <RenderItem item={item} />}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
            />
            <StatusBar style="auto" />
        </View>
    );
}
