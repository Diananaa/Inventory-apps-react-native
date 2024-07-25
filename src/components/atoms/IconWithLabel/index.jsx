import React from 'react';
import { View, Text, Image } from 'react-native';
import Themes from '../../../utils/Themes';
const IconWithLabel = ({ source, label, focused, size }) => {
    console.log('source', source)
    return (
        <View style={{ alignItems: 'center', width: '100%', }}>
            <Image source={source} style={{ width: 24, height: 24 }} />
            <Text style={{ color: focused ? Themes.COLOR.primary : Themes.COLOR.gray, marginTop: 4, fontSize: 12, textAlign: 'center' }}>{label}</Text>
        </View>
    );
};

export default IconWithLabel;