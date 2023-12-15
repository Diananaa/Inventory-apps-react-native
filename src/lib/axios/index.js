import axios from 'axios';
import { useToast } from "react-native-toast-notifications"
import { useSelector } from 'react-redux';

export const postWithHeaders = async (url, value, token, messageError) => {
    console.log('postWithHeaders value', value)
    const toast = useToast();
    // const token = useSelector((state) => state.auth.token)
    console.log('header postWithHeaders aaa', token)

    try {
        const response = await axios.post(`https://mobile.dev.quadrant-si.id/developertest${url}`,
            value,
            { headers: `Bearer ${token}` }
        );
        console.log('response.data', response.data)
        return response.data;
    } catch (error) {
        messageError ? toast.show(messageError) : toast.show("request is failed")
        console.log('err lib axios', error)
        // throw error;
    }
};