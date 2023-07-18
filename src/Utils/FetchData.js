import axios from 'axios';

const BaseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'f02bb763b7mshb59b0b23f56f68ap18e5c5jsnbd4c4910e7aa',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
const FetchFormApi = async (url) => {
    const { data } = await axios.get(`${BaseUrl}/${url}`, options);

    return data;
};

export default FetchFormApi;
