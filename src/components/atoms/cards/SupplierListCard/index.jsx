import { StyleSheet, Text, View } from "react-native"
import { ICemail, ICmaps, ICphone, ICphoneOffice } from "../../../../assets/icons"
import Row from "../../Row"
import { useQuery } from "@tanstack/react-query";
const SupplierList = ({data}) => {
  
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.title}>{data?.name} {data?.id}</Text>
            <Row style={styles.containerList}>
                <View style={styles.containerLeft}>
                    <Row>
                        <View style={styles.iconStyle}>
                            <ICemail />
                        </View>
                        <View>
                            <Text numberOfLines={1}>nana dsbsjd jdnghbddi jdgdbj dsfbvsg</Text>
                            <Text numberOfLines={1}>ansfsaj</Text>
                        </View>
                    </Row>
                    <Row>
                        <View style={styles.iconStyle}>
                            <ICphone />
                        </View>
                        <View>
                            <Text numberOfLines={1}>nana dsbsjd jdnghbddi jdgdbj dsfbvsg</Text>
                            <Text numberOfLines={1}>ansfsaj</Text>
                        </View>
                    </Row>
                    <Row>
                        <View style={styles.iconStyle}>
                            <ICphoneOffice />
                        </View>
                        <View>
                            <Text numberOfLines={1}>nana dsbsjd jdnghbddi jdgdbj dsfbvsg</Text>
                            <Text numberOfLines={1}>ansfsaj</Text>
                        </View>
                    </Row>
                </View>

                <Row style={styles.containerRight}>
                    <View>
                        <ICmaps />
                    </View>
                    <View style={styles.mapsStyle}>
                        <Text numberOfLines={7}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat hic porro eos vero. Ad commodi quod vero, quia nostrum quisquam provident asperiores obcaecati illo consequatur veritatis alias? Asperiores, nobis corrupti? </Text>
                    </View>
                </Row>
            </Row>
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