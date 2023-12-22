import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICplusLogo } from "../../assets/icons";

// components
import { useInfiniteQuery, useQuery } from 'react-query';
import ProductListCard from "../../components/atoms/cards/ProductListCard";
import Header from "../../components/molecules/Header";
import InputSearch from '../../components/organism/InputSearch';
import useInventoryAPI from '../../utils/api/Inventory';
import { useEffect, useState } from "react";
import _ from 'lodash';

const ListInventory = ({ navigation }) => {
    const { getListInventoryAPI, getSearchInventoryAPI } = useInventoryAPI()
    const [searchQuery, setSearchQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')

    const debouncedSearch = _.debounce(value => {
        setDebouncedQuery(value)
    }, 1000);

    const {
        data: dataSearch,
        isFetching: isFetchingSearch,
    } = useQuery(['search', debouncedQuery], () => getSearchInventoryAPI(debouncedQuery), {
        enabled: !!debouncedQuery
    });

    useEffect(() => {
        debouncedSearch(searchQuery)
        return () => debouncedSearch.cancel()
    }, [searchQuery])

    const {
        data: dataList,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery('getListInventory', ({ pageParam = 0 }) => getListInventoryAPI(pageParam), {
        getNextPageParam: (lastPage) => lastPage.page + 1,
    });

    console.log('dataList', dataList)
    // const PostList = ({ searchQuery }) => {
    //     const {
    //         data,
    //         fetchNextPage,
    //         hasNextPage,
    //         isFetching,
    //         isFetchingNextPage,
    //         isError,
    //         error,
    //     } = useInfiniteQuery(['posts', searchQuery], ({ pageParam = 0 }) => fetchPosts(pageParam, searchQuery), {
    //         getNextPageParam: (lastPage) => lastPage.nextPage,
    //     });
    // }

    return (
        <View style={styles.container}>
            <Header
                title={"Inventory Apps"}
                type={"primary"}
            />
            <View>
                <InputSearch
                    value={searchQuery}
                    onChangeText={(e) => setSearchQuery(e)}
                />

                {
                    dataList?.pages[0].data.length < 0 ? (
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                            <Image source={imgDataNotFound} style={{ width: 200, height: 200 }} />
                        </View>
                    ) : (
                        <View style={{ paddingBottom: 150 }}>
                            <FlatList
                                data={dataList?.pages?.flatMap((page) => page?.data)}
                                renderItem={({ item }) => <ProductListCard data={item} navigation={navigation} />}
                                keyExtractor={(datas, index) => index?.toString()}
                                onEndReached={() => {
                                    if (hasNextPage && !isFetchingNextPage) {
                                        fetchNextPage();
                                    }
                                }}
                                ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
                            />
                        </View>
                    )
                }

                {/* {isFetchingSearch ?
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator />
                    </View>
                    : null}
                {
                    dataSearch?.data.length < 0 ? (
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                            <Image source={imgDataNotFound} style={{ width: 200, height: 200 }} />
                        </View>
                    ) : (
                        <View style={{ paddingBottom: 150 }}>
                            <FlatList
                                data={dataSearch?.data}
                                renderItem={({ item }) => <ProductListCard data={item} navigation={navigation} />}
                                keyExtractor={(datas, index) => index?.toString()}
                            />
                        </View>
                    )
                } */}
            </View>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.3} onPress={() => navigation.navigate("CreateInventory")}>
                <ICplusLogo width={24} height={24} style={styles.iconPlus} fill="white" />
            </TouchableOpacity>
        </View>
    );
}
export default ListInventory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    iconPlus: {
        width: 24,
        height: 24,
        bottom: 0, right: 0,
    },
    buttonStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        bottom: 8, right: 8,
        padding: 14,
        backgroundColor: 'rgb(153 27 27)',
        borderRadius: 100
    }
})