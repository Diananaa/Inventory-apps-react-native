import axios from "axios"
import { useSelector } from "react-redux"
import { postWithHeaders } from "../../../lib/axios"
import { useToast } from "react-native-toast-notifications"


const useSupplierAPI = () => {
    const toast = useToast();
    const createSupplierAPI = async (value, token) => {
        console.log('createSupplierAPI value', value)
        console.log('createSupplierAPI token', token)

        return axios.post(`https://mobile.dev.quadrant-si.id/developertest/Supplier`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((res) => res.data);

        // try {
        //     const response = await axios.post(`https://mobile.dev.quadrant-si.id/developertest/Supplier`,
        //         value,
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         }
        //     ).then((res) => res.data);
        //     console.log('response.data', response.data)
        //     return response.data;
        // } catch (error) {
        //     toast.show("create is failed")
        //     console.log('err lib axios', error)
        //     throw error;
        // }
    }
    return { createSupplierAPI }
}

export default useSupplierAPI

// export const createSupplierAPI = async (data, token) => {
//     return axios.post('https://mobile.dev.quadrant-si.id/developertest/Supplier',
//         data,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     )
//         .then((res) => res.data)
// }
// .then((res) => res.data)