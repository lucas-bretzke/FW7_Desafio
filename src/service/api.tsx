import { http } from "./config";

export default {
    postShortUrl: async (url: string, code: string) => {
        const response = await http.post('/new', { url: url, code: code })
        return response?.data
    }
}