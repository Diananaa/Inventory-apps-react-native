import { StyleSheet, Text, TextInput, View } from "react-native"
import Row from "../../atoms/Row"
import { ICClose, ICSearch } from "../../../assets/icons"
const InputSearch = () => {
    return (
        <Row style={style.containerStyle}>
            <ICSearch />
            <TextInput
                placeholder="Search"
                style={{ width: '80%', }}
            />
            <ICClose />
        </Row>
    )
}

export default InputSearch
const style = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 12
    }

})