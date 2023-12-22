import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { ICCloseDisable } from "../../../assets/icons";

const ModalCustom = ({modalVisible, setModalVisible,children}) => {
    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <ICCloseDisable />
                        </Pressable>
                       <View style={styles.childrenStyle}>
                        {children}
                       </View>
                    </View>
                </View>
            </Modal>
           
        </>
    )
}
export default ModalCustom
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(226 232 240 / 0.5)'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '80%',
        paddingVertical: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        position: 'absolute',
        right: 0
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    childrenStyle: {
        paddingHorizontal: 12,
        paddingVertical: 18
    }
});