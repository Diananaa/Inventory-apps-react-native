import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
const Button = ({ title, onPress, disabled, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}
            activeOpacity={0.2}
            {...props}
            style={styles.container(disabled)}>
            <Text style={{ color: 'white', fontSize: 16 }}>{title ?? "default"}</Text>
            {
                disabled ? (
                    <ActivityIndicator color={"white"} />
                ) : null
            }
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    container: (disabled) => ({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: disabled ? '#C85555' : 'rgb(153 27 27)',
        paddingHorizontal: 32,
        borderRadius: 8,
        paddingVertical: 12,
        flex: 1,
        flexDirection: 'row',
        gap: 4
    })
})