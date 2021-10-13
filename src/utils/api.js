import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "x-apikey": process.env.REACT_APP_API_KEY
    }
})

export default api