import React from 'react';
import Main from 'screens/Main';
import Post from 'screens/Post';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { gStyle } from 'styles/style';

const Stack = createStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: 'Last posts',
                        headerTitleStyle: gStyle.title,
                    }}
                />
                <Stack.Screen
                    name="Post"
                    component={Post}
                    options={({ route }) => ({ title: route.params.title })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigate;
