import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { removeLocalStorage } from '../storage';

const instance = axios.create({
    baseURL: 'https://mobile.dev.quadrant-si.id/developertest', // Ganti dengan URL API Anda
    timeout: 5000, // Sesuaikan dengan kebutuhan Anda
});
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            removeLocalStorage('auth')
            const navigation = useNavigation()
            navigation.replace('Login');
        }
        return Promise.reject(error);
    }
);

export default instance;
