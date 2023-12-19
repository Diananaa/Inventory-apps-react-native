import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';
import { imgDataNotFound } from '../../assets/image';
import SupplierList from '../../components/atoms/cards/SupplierListCard';

const Useinf = () => {
  const token = useSelector((state) => state.auth.token);

  const getListSupplier = async (page = 1) => {
    try {
      const response = await fetch(
        `https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${page}/3`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('getListSupplier', getListSupplier, {
    getNextPageParam: (lastPage) => {
      if (lastPage.data.length < 10) return undefined;
      return lastPage.nextPage;
    },
  });

  return (
    <View>
      <FlatList
        data={data?.pages?.flatMap((page) => page.data) || []}
        renderItem={({ item }) => <SupplierList data={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
            <Image source={imgDataNotFound} style={{ width: 200, height: 200 }} />
          </View>
        )}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          if (isFetchingNextPage) {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 50 }}>
                <ActivityIndicator color={'rgb(153 27 27)'} />
              </View>
            );
          }
          return null;
        }}
      />

      {status === 'error' && <Text>Error: {error.message}</Text>}

      <TouchableOpacity onPress={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        <Text>Load More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Useinf;
