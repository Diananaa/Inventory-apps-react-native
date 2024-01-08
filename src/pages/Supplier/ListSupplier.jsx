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
    } = useInfiniteQuery('getListSupplier', getListSupplierAPI,
        { getNextPageParam: (lastPage) => lastPage.totalPages > lastPage.page ? lastPage.page + 1 : undefined, }
    );

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
                    <View style={{ marginBottom: 120 }}>
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
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.3} onPress={() => navigation.navigate("CreateSupplier")}>
                            <ICplusLogo width={24} height={24} style={styles.iconPlus} fill="white" />
                        </TouchableOpacity>
                    </View>
                )
            }

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
        bottom: 20,
        right: 20,
        padding: 14,
        backgroundColor: 'rgb(153 27 27)',
        borderRadius: 100
    }
})