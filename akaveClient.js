import { default as axios } from 'axios';

const API_BASE_URL = 'http://codegarage.cloud:8000';

async function apiRequest(method, endpoint, data = null) {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${endpoint}`,
      data,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}

await apiRequest('GET', '/buckets');