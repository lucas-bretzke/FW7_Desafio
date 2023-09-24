import axios from 'axios'

export const http = axios.create({
    baseURL: "https://api-fw7.onrender.com/"
})