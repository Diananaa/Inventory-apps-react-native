import { Formik } from 'formik';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../components/atoms/Button";
import InputForm from '../components/atoms/Form/InputForm';
import { ICLogout } from '../assets/icons';
import Row from '../components/atoms/Row';
import { ImgUserNull } from '../assets/image';
import InputSearch from '../components/organism/InputSearch';
import { useInfiniteQuery, useQuery } from 'react-query';
import useInventoryAPI from '../utils/api/Inventory';
import ProductListCard from '../components/atoms/cards/ProductListCard';
import useSupplierAPI from '../utils/api/supplier';
import SupplierList from '../components/atoms/cards/SupplierListCard';

const Home = ({ navigation }) => {
    const { getListInventoryAPI } = useInventoryAPI()
    const { getListSupplierAPI } = useSupplierAPI()
    const {
        data: dataListInventory
    } = useQuery('getInventoryHome', () => getListInventoryAPI({ pageParam: 1, size: 1 }));

    const {
        data: dataListSupplier
    } = useQuery('getListSupplierHome', () => getListSupplierAPI({ pageParam: 1, size: 1 }))
    console.log('dataListSupplier', dataListSupplier)
    return (
        <View>
            <View style={style.container}>
                <View style={{ position: 'absolute', right: 8, top: 8 }}>
                    <ICLogout />
                </View>
                <Row style={style.greetingContainerStyle}>
                    <View>
                        <Text style={[style.colorText, style.fontGreetingStyle]}>Good Morning</Text>
                        <Text style={[style.colorText, style.fontDescStyle]}>Manage Inventory Easier</Text>
                    </View>
                    <View>
                        <ImgUserNull />
                    </View>
                </Row>
            </View>
            <View style={style.searchStyle}>
                <InputSearch
                // value={searchQuery}
                // onChangeText={(e) => setSearchQuery(e)}
                />
            </View>
            <View style={{ marginHorizontal: 8 }}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Text style={style.textTitleStyle}>Supplier</Text>
                    <Text>See all</Text>
                </Row>
                <FlatList
                    data={dataListInventory?.data}
                    renderItem={({ item }) => <ProductListCard data={item} navigation={navigation} />}
                    keyExtractor={(datas, index) => index?.toString()}
                />
            </View>
            <View style={{ marginHorizontal: 8, marginTop: 20 }}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Text style={style.textTitleStyle}>Item</Text>
                    <Text>See all</Text>
                </Row>
                <FlatList
                    data={dataListSupplier?.data}
                    renderItem={({ item }) => <SupplierList data={item} navigation={navigation} />}
                    keyExtractor={(datas, index) => index?.toString()}
                />
            </View>
        </View>
    )
}
export default Home

const style = StyleSheet.create({
    container: {
        backgroundColor: '#991B1B',
        height: 165,
        justifyContent: 'center',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20
    },
    colorText: {
        color: 'white'
    },
    fontGreetingStyle: {
        fontSize: 24,
        fontWeight: 500
    },
    fontDescStyle: {
        fontSize: 16,
    },
    greetingContainerStyle: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    searchStyle: {
        position: 'relative',
        top: -25,
        marginHorizontal: 20
    },
    textTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})