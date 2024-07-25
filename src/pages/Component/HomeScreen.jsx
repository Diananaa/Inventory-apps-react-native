import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { ICHomeActive } from '../../assets/mza/icon';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Text>Home Screen djfgjsd</Text>
            <Image source={ICHomeActive} style={{width:24, height:24}} />
        </View>
    );
}
