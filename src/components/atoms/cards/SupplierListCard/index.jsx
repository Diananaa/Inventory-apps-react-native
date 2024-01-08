import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ICemail, ICmaps, ICphone, ICphoneOffice } from "../../../../assets/icons"
import Row from "../../Row"
const SupplierList = ({ data, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateSupplier', { data: data })}>
                <Text numberOfLines={1} style={styles.title}>{data?.name}</Text>
                <Row style={styles.containerList}>
                    <View style={styles.containerLeft}>

                        {data?.contacts.map((contact, index) => (
                            <Row key={index}>
                                <View style={styles.iconStyle}>
                                    {contact.contactType === "mobilePhone" && <ICphone />}
                                    {contact.contactType === "officePhone" && <ICphoneOffice />}
                                    {contact.contactType === "email" && <ICemail />}
                                </View>
                                <View>
                                    <Text numberOfLines={1}>{contact.name ?? "-"}</Text>
                                    <Text numberOfLines={1}>{contact.value ?? "-"}</Text>
                                </View>
                            </Row>
                        ))}
                    </View>

                    <Row style={styles.containerRight}>
                        <View>
                            <ICmaps />
                        </View>
                        <View style={styles.mapsStyle}>
                            <Text numberOfLines={7}>
                                {data?.address}, {data?.city}, {data?.postCode}
                            </Text>
                        </View>
                    </Row>
                </Row>
            </TouchableOpacity>
        </View>
    )
}

export default SupplierList

const styles = StyleSheet.create({
    container: {
        margin: 4,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    iconStyle: {
        justifyContent: 'center'
    },
    containerList: {
        gap: 24,
        justifyContent: 'space-between'
    },
    containerLeft: {
        gap: 4,
        width: '45%'
    },
    containerRight: {
        width: '40%'
    },
    mapsStyle: {
        height: 125,
    }
})