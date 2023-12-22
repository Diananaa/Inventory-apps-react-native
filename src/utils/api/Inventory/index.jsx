import axios from "axios";

const { useSelector } = require("react-redux");

const useInventoryAPI = () => {
    const token = useSelector((state) => state.auth.token);
    console.log('token', token)

    const getSearchInventoryAPI = async (searchQuery = '') => {
        const response = await axios.get(`https://mobile.dev.quadrant-si.id/developertest/InventoryItem/inquiry/1/99999?name=${searchQuery}&sku=${searchQuery}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return response.data;
    }
    const getListInventoryAPI = async (pageParam = 0) => {
        const response = await axios.get(`https://mobile.dev.quadrant-si.id/developertest/InventoryItem/inquiry/${pageParam}/5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return response.data;
    }

    const createInventoryAPI = async (value) => {
        const response = await axios.post(`https://mobile.dev.quadrant-si.id/developertest/InventoryItem`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data
    }
    return { getListInventoryAPI, createInventoryAPI, getSearchInventoryAPI }
}

export default useInventoryAPI