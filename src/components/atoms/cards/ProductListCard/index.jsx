import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ImgTriangle } from "../../../../assets/image"
import { ICemail, ICphone, ICphoneOffice } from '../../../../assets/icons'
import Row from '../../Row'
import { useConvertRupiah } from '../../../../hooks/useConvertRupiah'

const ProductListCard = ({ data, navigation }) => {
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={()=> navigation.navigate("EditInventory", {id: data.id})}>
            <View style={styles.containerStyle}>
                <View>
                    <View>
                        <ImgTriangle />
                    </View>
                    <View style={styles.persenContainerStyle}>
                        <Text style={styles.persenTitleStyle}>Margin Percentage</Text>
                        <Text style={styles.persenDescStyle}>{data?.marginPercentage} %</Text>
                    </View>
                </View>

                <Row style={styles.iconStyle}>
                    <ICphoneOffice />
                    <ICemail />
                    <ICphone />
                </Row>

                <View style={styles.containerQuantity}>
                    <View style={styles.positionContainerQuantity}>
                        <Text style={styles.descQuantityStyle}>{data?.qty ?? 0}</Text>
                        <Text>Quantity</Text>
                    </View>
                </View>

                <View style={styles.containerFill}>
                    <View style={styles.positionFillContainer}>
                        <View style={styles.fillContainer}>
                            <Text style={styles.titleStyle} numberOfLines={1}>{data.name}</Text>
                            <Text style={styles.descTitleStyle} numberOfLines={1}>{data.sku}</Text>
                            <View>
                                <Row>
                                    <Text style={styles.descStyle}>Supplier</Text>
                                    <Text numberOfLines={1}>{data?.supplier?.name}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.descStyle}>Cost</Text>
                                    <Text numberOfLines={1}>{useConvertRupiah(data?.costPrice)}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.descStyle}>Retail</Text>
                                    <Text numberOfLines={1}>{useConvertRupiah(data?.retailPrice)}</Text>
                                </Row>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default ProductListCard
const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 4,
        height: 170,
        backgroundColor: '#FFEFEF'
    },
    descStyle: {
        fontWeight: '600',
        fontSize: 15,
        width: 60
    },
    descTitleStyle: {
        fontWeight: 'normal',
        fontSize: 16
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    fillContainer: {
        width: '50%',
    },
    positionFillContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    persenTitleStyle: {
        fontSize: 14,
        fontWeight: '700'
    },
    persenContainerStyle: {
        position: 'absolute',
        top: 0,
        paddingLeft: 8,
        paddingTop: 4
    },
    persenDescStyle: {
        fontSize: 20,
        fontWeight: '900',
        marginTop: 4
    },
    containerFill: {
        marginTop: 35,
        position: 'absolute',
        top: 18,
        width: '100%',
    },
    iconStyle: {
        position: 'absolute',
        right: 8, top: 8
    },
    containerQuantity: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderColor: '#991B1B',
        borderWidth: 1,
        width: 80
    },
    positionContainerQuantity: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    descQuantityStyle: { fontSize: 24, fontWeight: '900' }
})