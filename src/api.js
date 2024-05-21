import axios from "axios";

const baseUrl = "https://api.unsplash.com/search/photos";
const accessKey = "614280";
export const apiFoo = async (query) => {
    const response = await axios.get(baseUrl, {
        params: {
            query: query,
            client_id: accessKey
        }
    });
    return console.log(response)
}