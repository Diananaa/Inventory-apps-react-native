import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from '@tanstack/react-query';
import { imgDataNotFound } from '../../assets/image';
import SupplierList from '../../components/atoms/cards/SupplierListCard';
import axios from 'axios';
import Button from '../../components/atoms/Button';


const List = () => {
    const token = useSelector((state) => state.auth.token);
    console.log('token dsjb', token)
    // const [page, setPage] = useState(1)
    const getListSupplier = async ({ page = 1 }) => {
        console.log('page', page)
        // try {
        //     const response = await fetch(`https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${page}/3`, {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     });

        //     if (!response.ok) {
        //         const errorMessage = await response.text();
        //         throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
        //     }

        //     return response.json();
        // } catch (error) {
        //     console.error('Error fetching data:', error);
        //     throw error;
        // }
        url = `https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${page}/3`
        const response = axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((data) => console.log('data', data)).catch((err) => console.error(err));
        // .then((data) => data).catch((err) => console.error(err));
        return response
    };


    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: getListSupplier,
        // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
        // getNextPageParam: (lastPage) => {
        //     console.log('lastPage', lastPage)
        //     // if (lastPage.data.length < 3) return undefined;
        //     // return lastPage.nextPage;
        // },
        getNextPageParam: (lastPage) => lastPage.next
    });
    console.log('data', data)
    return (
        <View>
            <Button
                onPress={() => {
                    // console.log('hello dfhgbh')
                    fetchNextPage()
                }}
                // disabled={!hasNextPage || isFetchingNextPage}
            >
                <Text>Next Page</Text>
            </Button>

            {status === 'loading' ? (
                <Text>Loading...</Text>
            ) : status === 'error' ? (
                <Text>Error: {error.message}</Text>
            ) : (
                <View>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                        asperiores debitis deleniti qui suscipit ad, consequatur earum, id
                        ratione ipsam, odio distinctio perspiciatis inventore. Vero nesciunt
                        voluptatum possimus libero non!
                    </Text>
                    {/* <FlatList
                        data={data?.pages || []}
                        renderItem={({ item }) => (
                            <SupplierList data={item.data} keyExtractor={(item) => item.id.toString()} />
                        )}
                        ListEmptyComponent={() => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                                <Image source={imgDataNotFound} style={{ width: 200, height: 200 }} />
                            </View>
                        )}
                        onEndReached={() => fetchNextPage()}
                        onEndReachedThreshold={0.1}
                        initialNumToRender={10}
                    /> */}
                </View>
            )}
        </View>
    );
}
export default List