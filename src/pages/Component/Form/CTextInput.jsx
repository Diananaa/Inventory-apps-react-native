import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import Themes from "../../../utils/Themes";


const CTextInput = ({
    onChangeText, onBlur, value, label, placeholder, error, ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View>
            <TextInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false);
                }}
                style={styles.input(isFocused)}
                placeholderTextColor={Themes.COLOR.gray}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                {...props}

            />
            {
                error && (
                    <Text>{error}</Text>
                )
            }
        </View>
    )
}
export default CTextInput
const styles = StyleSheet.create({
    input: (isFocused) => ({
        borderWidth: 1,
        borderColor: isFocused ? Themes.COLOR.primary : Themes.COLOR.gray.sweet,
        borderRadius: 8,
        padding: 16,
        width: 'auto',
        height: 'auto'
    }),
});
