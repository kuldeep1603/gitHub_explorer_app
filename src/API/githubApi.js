import axios from "axios";

// base url 
const API_URL = "https://api.github.com/search/repositories";

const fetchData = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?q=${query}`);
    return response.data.items; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

export default fetchData;
