export const useAlbumsQuery = (params) => {
    const res = useInfiniteQuery(
      [QueryKeys.Albums, params],
      ({ pageParam = 1 }) => fetchAlbums(pageParam),
      {
        onError: (error) => {
          if (error.response.status !== 424) {
            logError(strings.networkingError);
          }
        },
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length + 1;
        },
        keepPreviousData: true,
      }
    );
  
    const albumPages = res.data?.pages ?? [];
    const albums = flatten(albumPages);
  
    return { ...res, data: albums };
  };