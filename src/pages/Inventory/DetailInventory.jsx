import { ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from "react-native"
import { useQuery } from "react-query"
import useInventoryAPI from "../../utils/api/Inventory"
import Header from "../../components/molecules/Header"
import Row from "../../components/atoms/Row"

const DetailInventory = ({ route, navigation }) => {
    const { id } = route.params

    const { detailInventoryAPI } = useInventoryAPI()
    const { data: itemInventory } = useQuery('detailInventoryItem', () => detailInventoryAPI(id))

    return (
        <View>
            <Row style={styles.headerContainerStyle}>
                <Header
                    title={"Iventory Item"}
                />
                <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => navigation.navigate("UpdateInventory", { id: id })}>
                    <Text style={{ color: 'white' }}>
                        update
                    </Text>
                </TouchableOpacity>
            </Row>
            {
                itemInventory ? (
                    <ScrollView style={styles.container} >
                        <View style={styles.cardStyle}>
                            <Text style={styles.titleStyle}>Name</Text>
                            <Text style={styles.descStyle}>{itemInventory?.name}</Text>
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.titleStyle}>SKU</Text>
                            <Text style={styles.descStyle}>{itemInventory?.sku}</Text>
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.titleStyle}>Quantity</Text>
                            <Text style={styles.descStyle}>{itemInventory?.qty}</Text>
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.titleStyle}>Retail Price</Text>
                            <Text style={styles.descStyle}>{itemInventory?.retailPrice}</Text>
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.titleStyle}>Retail Cost</Text>
                            <Text style={styles.descStyle}>{itemInventory?.costPrice}</Text>
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.titleStyle}>Margin Percentage</Text>
                            <Text style={styles.descStyle}>{itemInventory?.marginPercentage}</Text>
                        </View>
                        {
                            itemInventory?.supplier?.contacts?.map((contact, index) => (
                                <View key={index} style={styles.cardStyle}>
                                    <Text style={styles.titleStyle}>{contact.contactType}</Text>
                                    <Text style={styles.descStyle}>{contact.name || '-'}</Text>
                                    <Text style={styles.descStyle}>{contact.value || '-'}</Text>
                                </View>
                            ))
                        }

                    </ScrollView >
                ) : (
                    <ActivityIndicator />
                )
            }
        </View>

    )
}

export default DetailInventory

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        gap: 10
    },
    cardStyle: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 4,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4
    },
    descStyle: {
        fontSize: 16
    },
    headerContainerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10
    },
    buttonContainerStyle: {
        backgroundColor: 'rgb(153 27 27)',
        justifyContent: 'center',
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 12
    }


})