import React, { FC } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { gStyle } from 'styles/style';
import Form from './Form';
import base from 'styles/base';
import { IPost } from 'types';

interface ModalAddPostProps {
    show: boolean;
    setShow: (value: boolean) => () => void;
    submit: (post: IPost) => void;
}

const ModalAddPost: FC<ModalAddPostProps> = ({ show, setShow, submit }) => {
    return (
        <>
            <Modal visible={show}>
                <View style={styles.container}>
                    <Ionicons
                        name="close"
                        size={48}
                        color="black"
                        style={styles.iconClose}
                        onPress={setShow(false)}
                    />
                    <Text style={styles.modalTitle}>Форма добавления статей</Text>
                    <Form submit={submit} />
                </View>
            </Modal>
            <Ionicons
                name="add-circle"
                size={48}
                color="black"
                style={styles.iconAdd}
                onPress={setShow(true)}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        color: base.colors.black,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    iconClose: {
        textAlign: 'right',
        color: base.colors.primary,
    },
    iconAdd: {
        textAlign: 'right',
        color: base.colors.primary,
    },
});

export default ModalAddPost;
