import axios from 'axios';

const API_BASE_URL = "https://frontend-interview.evidentinsights.com/";

const fetchAlbumDetails = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching album details:", error.message);
    }
  }
};
 const albumService = {
  fetchAlbumDetails
};

export default albumService;