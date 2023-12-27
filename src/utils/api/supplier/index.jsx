import axios from "axios";
import { useSelector } from "react-redux";

const useSupplierAPI = () => {
    const token = useSelector((state) => state.auth.token);
    console.log('token', token)

    const createSupplierAPI = async (value) => {
        const response = await axios.post(`https://mobile.dev.quadrant-si.id/developertest/Supplier`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data
    }
    const getListSupplierAPI = async (pageParam = 0) => {
        const response = await axios.get(`https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/${pageParam}/5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return response.data;
    }
    const getALLSupplierAPI = async () => {
        const response = await axios.get(`https://mobile.dev.quadrant-si.id/developertest/Supplier/inquiry/1/999999`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return response.data;
    }
    return { createSupplierAPI, getListSupplierAPI, getALLSupplierAPI }
}

export default useSupplierAPI
