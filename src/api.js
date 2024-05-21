import axios from "axios";

const baseUrl = "https://api.unsplash.com/search/photos";
const accessKey = "Ne61K3eIre2CvwGla7QLYoeCHXlPZ91C0ufyMwxCMDs";

export const apiFoo = async (query) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        query: query,
        client_id: accessKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
