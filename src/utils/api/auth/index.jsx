import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const loginApi = async (data) =>
    axios.post('https://mobile.dev.quadrant-si.id/developertest/Login', data)
        .then((res) => res.data)

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('auth');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};