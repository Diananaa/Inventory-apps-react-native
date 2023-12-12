import { StyleSheet, Text, View } from 'react-native'

const Header = ({ title, desc, type }) => {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.titleStyle(type)}>{title ?? "your name page"}</Text>
            {desc ? <Text style={styles.descStyle}>{desc}</Text> : null}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    titleStyle: (type) => ({
        fontSize: 24,
        color: type === "primary" ? "white" : 'rgb(55 65 81)',
        fontWeight: '600'
    }),
    descStyle: {
        fontSize: 14,
        color: 'rgb(55 65 81)',
        fontWeight: '300'
    },
    container: (type) => (
        {
            justifyContent: 'center',
            alignItems: type === 'primary' ? 'center' : '',
            backgroundColor: type === 'primary' ? 'rgb(153 27 27)' : '',
            paddingHorizontal: 8,
            paddingVertical: 12
        }
    )

})