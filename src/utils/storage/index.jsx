import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications"

export const getLocalStorage = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        useToast().show("Data is failed")
    }
};

export const setLocalStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        useToast().show("Data is failed")
    }
};

export const removeLocalStorage = async (key) => {
    try {
        return AsyncStorage.removeItem(key)
    } catch (e) {
        useToast().show("Data is failed")
    }
}