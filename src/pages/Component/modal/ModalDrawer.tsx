import ICFilter from '@images/icon-filter.svg'
import ICSearch from '@images/icon-search.svg'
import { Image, View } from "@qsi/react-native-genqui"
import { Button, Gap, Row, Text } from "@components/atoms"
import Themes from "../../properties/Themes"
import { useState, useRef, useEffect } from "react"
import { useNavigation } from '@react-navigation/native';
import { View as CView, TextInputProps, StyleSheet, TextInput, TouchableOpacity, Modal, Animated, Easing } from 'react-native'

interface ISearch extends TextInputProps {

}
const SearchBar = (props: ISearch) => {
    const { placeholder } = props;
    const [value, setValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // Memulai animasi dari luar layar sebelah kanan
    const slideAnim = useRef(new Animated.Value(300)).current;

    const slideIn = () => {
        Animated.timing(slideAnim, {
            toValue: 0, // Geser ke posisi 0 (di dalam layar)
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const slideOut = () => {
        Animated.timing(slideAnim, {
            toValue: 300, // Geser kembali ke posisi awal di luar layar sebelah kanan
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => setModalVisible(false));
    };

    useEffect(() => {
        if (modalVisible) {
            slideIn();
        } else {
            slideOut();
        }
    }, [modalVisible]);

    return (
        <Row>
            <Gap width={24} />
            <CView style={styles.input(isFocused)}>
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor={Themes.COLOR.gray}
                    onChangeText={setValue}
                    value={value}
                    placeholder={placeholder}
                />
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 0,
                        right: 10,
                    }}
                    onPress={() => console.log('search')}
                    activeOpacity={0.2}
                >
                    <View className={'h-[24px] w-[24px]'}>
                        <Image source={ICSearch} className={'h-[24px] w-[24px]'} />
                    </View>
                </TouchableOpacity>
            </CView>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={slideOut}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={slideOut}
                >
                    <Animated.View style={[styles.modalView, { transform: [{ translateX: slideAnim }] }]}>
                        <Text style={styles.modalText}>Hello, I'm a modal!</Text>
                        <Button title="Close Modal" onPress={slideOut} />
                        <Button title="Choose" onPress={() => console.log('dgfbdhs')} />
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setModalVisible(true)}
                activeOpacity={0.2}
            >
                <Row>
                    <Gap width={16} />
                    <Image source={ICFilter} />
                    <Gap width={24} />
                </Row>
            </TouchableOpacity>
        </Row>
    );
};

const styles = StyleSheet.create({
    input: (isFocused: boolean) => ({
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: isFocused ? Themes.COLOR.primary : Themes.COLOR.gray.sweet,
        borderRadius: 8,
        paddingLeft: 16,
        width: 'auto',
        height: 'auto',
        fontSize: 14,
        flex: 1,
        position: 'relative',
    }),
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: 300,
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default SearchBar;
