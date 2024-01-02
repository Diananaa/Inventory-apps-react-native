import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ICClose, ICCloseDisable, ICSearch } from "../../../assets/icons";
import Row from "../../atoms/Row";

const InputSearch = ({ onChangeText, onBlur, value, onReset }) => {
    return (
        <Row style={style.containerStyle}>
            <ICSearch />

            <TextInput
                placeholder="Search"
                style={{ width: '80%' }}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}

            />

            {value ? (
                <TouchableOpacity onPress={onReset}>
                    <ICClose />
                </TouchableOpacity>
            ) :
                <ICCloseDisable />
            }

        </Row>
    );
};

const style = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 12
    }
});

export default InputSearch;
