import axios from "axios";

const { useSelector } = require("react-redux");

const useInventoryAPI = () => {
    const token = useSelector((state) => state.auth.token);
    console.log('token', token)

    const getListInventoryAPI = async (pageParam = 0) => {
        const response = await axios.get(`https://mobile.dev.quadrant-si.id/developertest/InventoryItem/inquiry/${pageParam}/5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return response.data;
    }
    return { getListInventoryAPI }
}

export default useInventoryAPI