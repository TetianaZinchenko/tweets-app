import axios from 'axios';

axios.defaults.baseURL = 'https://6489d0b65fa58521cab04db0.mockapi.io';

export async function fetchTweets(params) {
  return await axios.get(`/users`, { params });
}
