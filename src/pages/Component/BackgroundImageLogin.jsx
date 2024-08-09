import * as React from 'react';
import { View } from 'react-native';

export default function BackgroundImageLogin() {

    const originalWidth = 500;
    const originalHeight = 500;
    const aspectRatio = originalWidth / originalHeight;

    return (
        <View style={{ width: "100%", aspectRatio, backgroundColor: "salmon" }}>
            <svg width="100%" height="100%" viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M151.5 36.5C64.7 36.5 38 29.6667 -3 25.5L-17.5 9.5H273.5L1051 -28L1049 21C805.333 29.5 238.3 36.5 151.5 36.5Z" fill="#003399" />
            </svg>


        </View>
    )
}