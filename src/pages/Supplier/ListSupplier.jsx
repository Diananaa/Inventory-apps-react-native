import React from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import SupplierList from '../../components/atoms/cards/SupplierListCard';
import Header from '../../components/molecules/Header';
import useSupplierAPI from '../../utils/api/supplier';
import { imgDataNotFound } from '../../assets/image';

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
                    <FlatList
                        data={data?.pages?.flatMap((page) => page?.data)}
                        renderItem={({ item }) => <SupplierList data={item} navigation={navigation}/>}
                        keyExtractor={(datas, index) => index?.toString()}
                        onEndReached={() => {
                            if (hasNextPage && !isFetchingNextPage) {
                                fetchNextPage();
                            }
                        }}
                        ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
                    />
                )
            }
        </View >
    );
};

export default ListSupplier;
