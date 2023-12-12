import { View, Text, StyleSheet } from 'react-native'
const ProductListCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}>nama</Text>
            <View style={styles.row}>
                <Text style={styles.labelStyle}>ID</Text>
                <Text style={styles.dscStyle}>93835</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: 'orange', width: 'auto', height: 50, gap: 4, flexDirection: 'row' }}>
                    <Text style={styles.typeStyle}>minuman</Text>
                    <Text style={styles.typeStyle}>minuman</Text>
                </View>
                <Text style={styles.dscStyle}>Rp. 50000</Text>
                {/* <View style={styles.row}>
                    <Text style={styles.labelStyle}>Price</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.labelStyle}>Type</Text>
                </View> */}
            </View>

        </View>
    )
}
export default ProductListCard
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(248 250 252)',
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginVertical: 4
    },
    row: {
        flexDirection: 'row',
    },
    nameStyle: {
        color: 'rgb(55 65 81)',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8
    },
    labelStyle: {
        color: 'rgb(55 65 81)',
        width: 50,
        fontSize: 14,
    },
    dscStyle: {
        color: 'rgb(55 65 81)'
    },
    typeStyle: {
        backgroundColor: 'rgb(254 226 226)',
        borderRadius: 12,
        paddingVertical: 2,
        paddingHorizontal: 12,
        height: 20
    }

})