import axios from "axios";


export default (url = import.meta.env.VITE_APP_API_URL) =>
{
    return axios.create({
        baseURL: url,
    })
}