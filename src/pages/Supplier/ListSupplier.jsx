import axios from 'axios';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import { useSelector } from 'react-redux';
import SupplierList from '../../components/atoms/cards/SupplierListCard';

const ListSupplier = () => {
    const token = useSelector((state) => state.auth.token);
    const fetchPosts = async (pageParam = 0) => {
        const response = await axios.get(`https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${pageParam}/5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return response.data;
    };
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isError,
        error,
    } = useInfiniteQuery('getListSupplier', ({ pageParam = 0 }) => fetchPosts(pageParam), {
        getNextPageParam: (lastPage) => lastPage.page + 1,
    });
    return (
        <View>
            <FlatList
                data={data?.pages?.flatMap((page) => page?.data)}
                renderItem={({ item }) => <SupplierList data={item} />}
                keyExtractor={(datas, index) => index?.toString()}
                onEndReached={() => {
                    console.log('hasNextPage', hasNextPage)
                    console.log('isFetchingNextPage', isFetchingNextPage)
                    if (hasNextPage && !isFetchingNextPage) {
                        fetchNextPage();
                    }
                }}
                ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
            />
        </View >
    );
};

export default ListSupplier;
