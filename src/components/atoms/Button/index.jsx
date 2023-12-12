import { StyleSheet, Text, TouchableOpacity } from 'react-native'
const Button = ({ title, onPress, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress}
            {...props}
            style={styles.container}>
            <Text style={{ color: 'white', fontSize: 16 }}>{title ?? "default"}</Text>
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(153 27 27)',
        paddingHorizontal: 32,
        borderRadius: 8,
        paddingVertical: 12,
        flex: 1
    }
})