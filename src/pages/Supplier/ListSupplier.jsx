import React, { useState } from 'react';
import { FlatList, ActivityIndicator, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { imgDataNotFound } from '../../assets/image';
import SupplierList from '../../components/atoms/cards/SupplierListCard';
import axios from 'axios';
import Row from '../../components/atoms/Row';

const ListSupplier = () => {
    const token = useSelector((state) => state.auth.token);
    // const [page, setPage] = useState(1)
    console.log('token', token)
    // console.log('page', page)
    const getListSupplier = (page = 1) =>
        fetch(`https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${page}/3`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! Status: ${resp.status}`);
                }
                return resp.json();
            })
            .then((json) => json)
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error; // Rethrow the error to be caught by React Query
            });
    // const getListSupplier = async (page = 1) => {
    //     const url = `https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${page}/3`;
    //     const response = await axios.get(url, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     });
    //     return response.data;
    // };

    // const getListSupplier = async (page = 1) => {
    //     const headers = new Headers({
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json', // Adjust the content type as needed
    //     });

    //     const url = `https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${page}/3`;

    //     return fetch(url, {
    //         method: 'GET',
    //         headers: headers,
    //     }).then((res) => res.json());
    // };

    console.log('getListSupplier', getListSupplier)
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: getListSupplier,
        // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
        getNextPageParam: (lastPage) => {
            if (lastPage.data.length < 10) return undefined;
            return lastPage.nextPage;
        }

    })

    console.log('data', data)
    // console.log('useData', data)
    // console.log('data.pages', data.pages)

    // const getListSupplierQuery = useQuery({
    //     queryKey: ["getListSupplier"],
    //     queryFn: getListSupplier,
    // });

    // const renderItem = ({ item }) => (
    //     <SupplierList data={item} />
    // );

    // const renderEmptyList = () => (
    //     <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
    //         <Image source={imgDataNotFound} style={{ width: 200, height: 200 }} />
    //     </View>
    // );

    // const renderFooter = () => {
    //     if (getListSupplierQuery.isFetchingNextPage)
    //         return (
    //             <View style={{ alignItems: 'center', justifyContent: 'center', height: 50 }}>
    //                 <ActivityIndicator color={'rgb(153 27 27)'} />
    //             </View>
    //         );
    //     return null;
    // };

    // const keyExtractor = (item) => item.id.toString();

    return (
        <View>
            <Row>
                {/* <TouchableOpacity
                    onPress={() => setPage(old => Math.max(old - 1, 0))}
                    style={{ backgroundColor: 'gray' }}>
                    <Text style={{ color: 'white' }}>Previous Page</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                // style={{ backgroundColor: 'blue', }}
                >
                    <Text >Next Page</Text>
                </TouchableOpacity>
            </Row>

            {status === 'loading' ? (
                <Text>Loading...</Text>
            ) : status === 'error' ? (
                <Text>Error: {error.message}</Text>
            ) : (
                <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta asperiores debitis deleniti qui suscipit ad, consequatur earum, id ratione ipsam, odio distinctio perspiciatis inventore. Vero nesciunt voluptatum possimus libero non!</Text>
                    {/* <ScrollView style={{ gap: 8 }}>
                        {
                            data?.data?.map((data, key) => (
                                <SupplierList data={data} />
                            ))
                        }
                    </ScrollView> */}
                </View>
            )}

            {/* <FlatList
                data={getListSupplierQuery?.data?.data || []}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListEmptyComponent={renderEmptyList}
                ListFooterComponent={renderFooter}
                onEndReached={() => getListSupplierQuery.fetchNextPage()}
                onEndReachedThreshold={0.1}
                initialNumToRender={10}
            /> */}
        </View>
    );
};

export default ListSupplier;
