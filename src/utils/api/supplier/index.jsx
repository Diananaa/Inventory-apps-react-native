import { useSelector } from "react-redux";
import axios from '../../lib/axios'

const useSupplierAPI = () => {
    const token = useSelector((state) => state.auth.token);

    const createSupplierAPI = async (value) => {
        const response = await axios.post(`/Supplier`,
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
        const response = await axios.get(`/Supplier/inquiry/${pageParam}/5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return response.data;
    }
    const getALLSupplierAPI = async () => {
        const response = await axios.get(`/Supplier/inquiry/1/999999`,
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
