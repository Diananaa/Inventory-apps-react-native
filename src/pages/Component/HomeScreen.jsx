import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { ICHomeActive } from '../../assets/mza/icon';
import Message from './modal/Message';
import CButton from '../../components/atoms/Button/CButton';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Text>Home Screen djfgjsd</Text>
            <Image source={ICHomeActive} style={{ width: 24, height: 24 }} />
            <Message />
            <View style={{ width: '70%', gap: 8}}>
                <CButton
                    // title={'default'}
                    disabled={true}
                    onPress={() => navigation.navigate('Settings')}
                />
                <CButton
                    title={'primary'}
                    onPress={() => navigation.navigate('Settings')}
                    type={'primary'}
                />
                <CButton
                    title={'secondary'}
                    onPress={() => navigation.navigate('Settings')}
                    type={'secondary'}
                />
                 <CButton
                    title={'outline'}
                    onPress={() => navigation.navigate('Settings')}
                    type={'outline'}
                />
                <CButton
                    title={'secondary (font color)'}
                    onPress={() => navigation.navigate('Settings')}
                    type={'secondary'}
                    fontColor={'green'}
                />
                <CButton
                    title={'secondary (fstyleBtn)'}
                    onPress={() => navigation.navigate('Settings')}
                    type={'secondary'}
                    styleBtn={{backgroundColor:'orange'}}
                />
               
            </View>
        </View>
    );
}
