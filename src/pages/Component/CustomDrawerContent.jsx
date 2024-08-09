import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ICArrowRight, ICHome, ICHomeActive, ICMenuBox, ICMenuBoxActive } from '../../assets/mza/icon';
import IconWithLabel from '../../components/atoms/IconWithLabel';
import Themes from '../../utils/Themes';

export default function CustomDrawerContent(props) {
    const { navigation } = props;
    const { state } = props;
    const activeRoute = state.routeNames[state.index];
    const MENU = [
        {
            label: 'Home',
            name: 'Home',
            icon: ICHome,
            iconActive: ICHomeActive
        }, {
            label: 'Semua Menu',
            name: 'menu',
            icon: ICMenuBox,
            iconActive: ICMenuBoxActive
        }, {
            label: 'Login',
            name: 'login',
            icon: ICMenuBox,
            iconActive: ICMenuBoxActive
        }
    ]
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ width: '100%', borderBottomColor:Themes.COLOR.gray, borderBottomWidth:1, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={ICArrowRight} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            {
                MENU.map((data, key) => (
                    <DrawerItem
                        key={key}
                        activeBackgroundColor='white'
                        label=""
                        icon={({ focused, color, size }) => (
                            <IconWithLabel
                                source={focused ? data.iconActive : data.icon}
                                label={data.label}
                                focused={focused}
                            />
                        )}
                        focused={activeRoute === data.name}
                        onPress={() => navigation.navigate(data.name)}
                    />
                ))
            }
        </DrawerContentScrollView>
    );
}
