import axios from "axios"

export const loginApi = async (data) =>
    axios.post('https://mobile.dev.quadrant-si.id/developertest/Login', data)
        .then((res) => res.data)

