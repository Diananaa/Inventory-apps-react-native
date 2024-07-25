// components/CustomDrawerContent.js
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ICArrowRight, ICHome, ICHomeActive, ICMenuBox, ICMenuBoxActive } from '../../assets/mza/icon';
import IconWithLabel from '../../components/atoms/IconWithLabel';

export default function CustomDrawerContent(props) {
    const { navigation } = props;
    const { state } = props;
    const activeRoute = state.routeNames[state.index];
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ width: '100%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={ICArrowRight} style={{width: 24, height: 24}} />
            </TouchableOpacity>
            <DrawerItem
                activeBackgroundColor='white'
                label=""
                icon={({ focused, color, size }) => (
                    <IconWithLabel
                        source={focused ? ICHomeActive : ICHome}
                        label="Home"
                        focused={focused}
                    />
                )}
                focused={activeRoute === 'Home'}
                onPress={() => navigation.navigate('Home')}
            />


            <DrawerItem
                label=""
                activeBackgroundColor='white'
                icon={({ focused, color, size }) => (
                    <IconWithLabel
                        source={focused ? ICMenuBoxActive : ICMenuBox}
                        label="Semua Menu"
                        focused={focused}
                    />
                )}
                focused={activeRoute === 'menu'}
                onPress={() => navigation.navigate('menu')}
            />
        </DrawerContentScrollView>
    );
}
