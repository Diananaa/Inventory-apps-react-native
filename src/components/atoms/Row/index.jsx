import { StyleSheet, View } from "react-native"

const Row = ({ style, children }) => {
    return (
        <View style={[styles.rowStyle, style]}>
            {children}
        </View>
    );
}
export default Row

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        gap: 8
    }
})