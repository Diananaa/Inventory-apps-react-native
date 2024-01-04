import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import SupplierList from '../../components/atoms/cards/SupplierListCard';
import Header from '../../components/molecules/Header';
import useSupplierAPI from '../../utils/api/supplier';
import { imgDataNotFound } from '../../assets/image';
import { ICplusLogo } from '../../assets/icons';

const ListSupplier = ({ navigation }) => {
    const { getListSupplierAPI } = useSupplierAPI()
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery('getListSupplier', ({ pageParam = 0 }) => getListSupplierAPI(pageParam), {
        getNextPageParam: (lastPage) => lastPage.page + 1,
    });
    return (
        <View>
            <Header
                title={"Supplier"}
                type={"primary"}
            />

            {
                data?.pages[0]?.data?.length < 0 ? (
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Image source={imgDataNotFound} style={{ width: 200, height: 200 }} />
                    </View>
                ) : (
                    <View>
                        <FlatList
                            data={data?.pages?.flatMap((page) => page?.data)}
                            renderItem={({ item }) => <SupplierList data={item} navigation={navigation} />}
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
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.3} onPress={() => navigation.navigate("CreateInventory")}>
                <ICplusLogo width={24} height={24} style={styles.iconPlus} fill="white" />
            </TouchableOpacity>
        </View >
    );
};

export default ListSupplier;
const styles = StyleSheet.create({
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
        bottom: 70,
        right: 10,
        padding: 14,
        backgroundColor: 'rgb(153 27 27)',
        borderRadius: 100
    }
})