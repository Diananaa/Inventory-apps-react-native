import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ICplusLogo } from "../../assets/icons";

// components
import Button from "../../components/atoms/Button";
import ProductListCard from "../../components/atoms/cards/ProductListCard";
import Header from "../../components/molecules/Header";
import InputSearch from '../../components/organism/InputSearch';

const ListInventory = ({ navigation }) => {

    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('auth');
    //         return jsonValue != null ? JSON.parse(jsonValue) : null;
    //     } catch (e) {
    //         // error reading value
    //     }
    // };
    // console.log('getDataLocal', getData().then((e)=> console.log('hasil local list', e)))
    return (
        <View style={styles.container}>
            <Header
                title={"Inventory Apps"}
                type={"primary"}
            />
            <View>
                <InputSearch />
                <ScrollView>
                    <ProductListCard />
                    <ProductListCard />
                    <ProductListCard />
                    <ProductListCard />
                    <ProductListCard />

                    <Button title={"Next Page"} onPress={() => navigation.navigate('Home')} />
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.3} onPress={() => navigation.navigate("CreateInventory")}>
                <ICplusLogo width={24} height={24} style={styles.iconPlus} fill="white" />
            </TouchableOpacity>
        </View>
    );
}
export default ListInventory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    iconPlus: {
        width: 24,
        height: 24,
        bottom: 0, right: 0,
    },
    buttonStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        bottom: 8, right: 8,
        padding: 14,
        backgroundColor: 'rgb(153 27 27)',
        borderRadius: 100
    }
})