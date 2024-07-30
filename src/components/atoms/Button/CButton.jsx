import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Themes from "../../../utils/Themes"
const CButton = ({
    title,
    onPress, disabled,
    styleBtn,  //style button
    fontColor, //color text btn
    icon,
    type,
    ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}
            activeOpacity={0.2}
            {...props}
            style={[styles.container(disabled, type), styleBtn]}>
            {icon}
            <Text style={styles.titleStyle(disabled, type, fontColor)}>{title ?? "default"}</Text>
        </TouchableOpacity>
    )
}

export default CButton
const styles = StyleSheet.create({
    titleStyle: (disabled, type, fontColor) => ({
        color: fontColor ?? (disabled ? Themes.COLOR.gray.sweet
            : type === 'primary' ? 'white'
                : type === 'secondary' ? Themes.COLOR.black
                    : type === 'outline' ? Themes.COLOR.primary
                        : Themes.COLOR.primary),
        fontSize: 18,
        fontWeight: '700'
    }),
    container: (disabled, type) => ({
        backgroundColor: disabled
            ? Themes.COLOR.gray.light
            : type === 'primary' ? Themes.COLOR.primary
                : type === 'secondary' ? Themes.COLOR.blue.info
                    : type === 'outline'
                        ? 'white'
                        : Themes.COLOR.primary,
        borderRadius: 8,
        width: 'auto',
        paddingVertical: 16,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: disabled ? Themes.COLOR.gray.light
            : type === 'primary' || type === 'secondary' || type === 'outline' ? Themes.COLOR.primary
                : 'white',
        gap: 4
    })


})