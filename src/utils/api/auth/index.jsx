
import axios from '../../lib/axios';
export const loginApi = async (data) =>
    axios.post('/Login', data)
        .then((res) => res.data).catch(er => console.error(er))

