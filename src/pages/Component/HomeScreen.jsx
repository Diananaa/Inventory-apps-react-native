import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { ICHomeActive } from '../../assets/mza/icon';
import Message from './modal/Message';
import CButton from '../../components/atoms/Button/CButton';
import CTextInput from './Form/CTextInput';
import Themes from '../../utils/Themes';
import LoginMZA from './LoginMZA';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
                <Text>Home Screen djfgjsd</Text>
                <Message />

                <View style={{ width: '70%', gap: 8 }}>
                    <LoginMZA />

                    <Text style={{ borderBottomWidth: 1, borderBottomColor: Themes.COLOR.gray }}>Button Component</Text>
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
                        styleBtn={{ backgroundColor: 'orange' }}
                    />
                    <CButton
                        title={'secondary (icon)'}
                        onPress={() => navigation.navigate('Settings')}
                        type={'outline'}
                        icon={
                            <Image source={ICHomeActive} style={{ width: 24, height: 24 }} />
                        }
                    />

                </View>
            </View>

        </ScrollView>
    );
}
