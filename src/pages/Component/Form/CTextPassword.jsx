import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Themes from "../../../utils/Themes";
import { ICEye, ICEyeoff } from "../../../assets/mza/icon";
import Column from "../../../components/atoms/Column";
import Row from "../../../components/atoms/Row";
import Center from "../../../components/atoms/Center";


const CTextPassword = ({
    onChangeText, onBlur, value, label, placeholder, error, ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isShow, setIsShow] = useState(true)
    const onShow = () => setIsShow(!isShow)
    return (
        <>
            <Row
                style={styles.input(isFocused)}
            >
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                    }}

                    placeholderTextColor={Themes.COLOR.gray}
                    onChangeText={onChangeText}
                    style={{ flex: 1, height: 'auto' }}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={isShow}
                    {...props}
                />
                <Center >
                    {
                        isShow ? (
                            <TouchableOpacity onPress={onShow} style={styles.buttonStyle}>
                                <ICEyeoff />
                            </TouchableOpacity>
                        )
                            : (
                                <TouchableOpacity onPress={onShow} style={styles.buttonStyle}>
                                    <ICEye />
                                </TouchableOpacity>
                            )
                    }
                </Center>


            </Row>
            {
                error && (
                    <Text>{error}</Text>
                )
            }
        </>
    )
}
export default CTextPassword
const styles = StyleSheet.create({
    input: (isFocused) => ({
        borderWidth: 1,
        borderColor: isFocused ? Themes.COLOR.primary : Themes.COLOR.gray.sweet,
        borderRadius: 8,
        paddingHorizontal: 16,
        width: 'auto',
        height: 'auto'
    }),
    buttonStyle: {
        width: 30, height: 30, justifyContent: 'center', alignItems: 'center'
    }

});
