import { StyleSheet, View } from "react-native"
const Column = ({ style, children }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}
export default Column

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8
    }
})