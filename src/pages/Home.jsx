import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from 'react-query';
import { ICLogout } from '../assets/icons';
import { ImgUserNull } from '../assets/image';
import Row from '../components/atoms/Row';
import SupplierList from '../components/atoms/cards/SupplierListCard';
import InputSearch from '../components/organism/InputSearch';
import useInventoryAPI from '../utils/api/Inventory';
import useSupplierAPI from '../utils/api/supplier';
import { CardSkeleton } from "../components/molecules/Skeleton";
import ProductListCard from "../components/atoms/cards/ProductListCard";

const Home = ({ navigation }) => {
    const { getListInventoryAPI } = useInventoryAPI()
    const { getListSupplierAPI } = useSupplierAPI()
    const {
        data: dataListInventory, isLoading: isLoadingInventory
    } = useQuery('getInventoryHome', () => getListInventoryAPI({ pageParam: 1, size: 1 }));

    const {
        data: dataListSupplier, isLoading: isLoadingSupplier
    } = useQuery('getListSupplierHome', () => getListSupplierAPI({ pageParam: 1, size: 1 }))

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
                    <TouchableOpacity onPress={() => navigation.navigate('ListSupplier')}>
                        <Text>See all</Text>
                    </TouchableOpacity>
                </Row>
                {
                    isLoadingSupplier && (
                        <View>
                            <CardSkeleton />
                        </View>
                    )
                }{
                    !isLoadingSupplier && dataListSupplier?.data ? (
                        <FlatList
                            data={dataListSupplier?.data}
                            renderItem={({ item }) => <SupplierList data={item} navigation={navigation} />}
                            keyExtractor={(datas, index) => index?.toString()}
                        />
                    ) : (
                        <Text>Data is null</Text>
                    )
                }

            </View>
            <View style={{ marginHorizontal: 8, marginTop: 20 }}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Text style={style.textTitleStyle}>Item</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ListInventory')}>
                        <Text>See all</Text>
                    </TouchableOpacity>
                </Row>
                {
                    isLoadingInventory && (
                        <View>
                            <CardSkeleton />
                        </View>
                    )
                }{
                    !isLoadingInventory && dataListInventory?.data ? (
                        <FlatList
                            data={dataListInventory?.data}
                            renderItem={({ item }) => <ProductListCard data={item} navigation={navigation} />}
                            keyExtractor={(datas, index) => index?.toString()}
                        />
                    ) : (
                        <Text>Data is null</Text>
                    )
                }

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