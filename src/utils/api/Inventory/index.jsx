import axios from '../../lib/axios'

const { useSelector } = require("react-redux");

const useInventoryAPI = () => {
    const token = useSelector((state) => state.auth.token);

    const getSearchInventoryAPI = async (searchQuery = '') => {
        const response = await axios.get(`/InventoryItem/inquiry/1/99999?name=${searchQuery}&sku=${searchQuery}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er))
        return response.data;
    }
    const getListInventoryAPI = async ({ pageParam = 1, size = 5 }) => {
        const response = await axios.get(`/InventoryItem/inquiry/${pageParam}/${size}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er))
        return response.data;
    }

    const createInventoryAPI = async (value) => {
        const response = await axios.post(`/InventoryItem`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).catch(er => console.error(er))
        return response.data
    }
    const detailInventoryAPI = async (id) => {
        const response = await axios.get(`/InventoryItem/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er))
        return response.data
    }
    const updateInventoryAPI = async (value) => {
        const response = await axios.put(`InventoryItem/UpdateItem`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(er => console.error(er))
        return response.data
    }
    return { updateInventoryAPI, getListInventoryAPI, createInventoryAPI, getSearchInventoryAPI, detailInventoryAPI }
}

export default useInventoryAPI