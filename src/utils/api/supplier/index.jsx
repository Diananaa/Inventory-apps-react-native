import axios from "axios"
import { useToast } from "react-native-toast-notifications"

const useSupplierAPI = () => {
    const createSupplierAPI = async (value, token) => {
        return axios.post(`https://mobile.dev.quadrant-si.id/developertest/Supplier`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((res) => res.data);
    }
    return { createSupplierAPI }
}

export default useSupplierAPI
