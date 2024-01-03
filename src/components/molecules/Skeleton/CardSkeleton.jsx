import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { StyleSheet, View } from 'react-native';

const CardSkeleton = () => {
    return (
        <View>
            <View style={styles.skeletonContainer} />
            <ContentLoader
                backgroundColor={'#C7C3C3'}
                foregroundColor={'#DCD6D6'}
            >
                <Rect x="0" y="0" rx="20" ry="20" width="100%" height="170" />
            </ContentLoader>
        </View>
    );
};

const styles = StyleSheet.create({

    skeletonContainer: {
        height: 150,
        width: '100%',
        borderRadius: 20,
    }
});

export default CardSkeleton;
