import { StyleSheet, View } from "react-native"
const Center = ({ style, children }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}
export default Center

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        gap: 8
    }
})