import React, {FC} from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { gStyle } from 'styles/style';

interface ModalAddPostProps {
    show: boolean;
    setShow: (value: boolean) => () => void
}

const ModalAddPost: FC<ModalAddPostProps> = ({show, setShow}) => {
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
                    <Text style={gStyle.title}>Форма добавления статей</Text>
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
    },
    iconClose: {
        textAlign: 'right',
    },
    iconAdd: {
        textAlign: 'right',
    },
});

export default ModalAddPost;
