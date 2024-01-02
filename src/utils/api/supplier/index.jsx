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
        ).catch(er => console.error(er))
        return response.data
    }
    const getListSupplierAPI = async ({ pageParam = 0, size = 5 }) => {
        const response = await axios.get(`/Supplier/inquiry/${pageParam}/${size}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er));
        return response.data;
    }
    const getALLSupplierAPI = async () => {
        const response = await axios.get(`/Supplier/inquiry/1/999999`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er));
        return response.data;
    }
    const updateSuplierAPI = async (value) => {
        const response = await axios.put('https://mobile.dev.quadrant-si.id/developertest/Supplier',
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er));
        return response.data;
    }
    return { createSupplierAPI, getListSupplierAPI, getALLSupplierAPI, updateSuplierAPI }
}

export default useSupplierAPI
