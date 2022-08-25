import React, { FC } from 'react';
import { StyleSheet, View, Button, TextInput, Pressable, Text } from 'react-native';
import { Formik } from 'formik';
import { IPost } from 'types';
import base from 'styles/base';

interface FormProps {
    submit: (post: IPost) => void;
}

const Form: FC<FormProps> = ({ submit }) => {
    return (
        <View>
            <Formik
                initialValues={{ title: '', author: '', body: '', key: '' }}
                onSubmit={(values, action) => {
                    values.key = Math.random().toString();
                    submit(values);
                    action.resetForm();
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.title}
                            placeholder="Title"
                            onChangeText={props.handleChange('title')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.author}
                            placeholder="Author"
                            onChangeText={props.handleChange('author')}
                        />
                        <TextInput
                            style={stylesInputBody}
                            value={props.values.body}
                            multiline
                            textAlignVertical="top"
                            placeholder="Text"
                            onChangeText={props.handleChange('body')}
                        />
                        <Pressable style={styles.button} onPress={props.handleSubmit}>
                            <Text style={styles.buttonText}>Create post</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: base.colors.black,
        marginBottom: 15,
    },
    body: {
        height: 128,
    },
    button: {
        marginTop: 15,
        padding: 15,
        backgroundColor: base.colors.primary,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: base.colors.white,
    },
});
const stylesInputBody = StyleSheet.flatten([styles.input, styles.body]);

export default Form;
