import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1/public',
  headers: {
		'Content-Type': 'application/json',
		'accept': 'application/json'
  },
});

export default axiosInstance;
