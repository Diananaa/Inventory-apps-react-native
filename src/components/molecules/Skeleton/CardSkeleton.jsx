import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CardSkeleton = () => {
    return (
        <View>
            <SkeletonPlaceholder>
                <View style={styles.skeletonContainer} />
            </SkeletonPlaceholder>
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
