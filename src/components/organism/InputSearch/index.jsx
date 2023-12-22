import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { ICClose, ICSearch } from "../../../assets/icons";
import Row from "../../atoms/Row";

const InputSearch = React.memo(({ onChangeText, onBlur, value }) => {
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
            <ICClose />
        </Row>
    );
});

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
