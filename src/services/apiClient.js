import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '16513ce8b0234753a9c51c8b2ae8ab76',
  },
});

class APIClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = config => {
    return axiosInstance.get(this.endpoint, config).then(res => res.data);
  };

  get = id => {
    return axiosInstance.get(this.endpoint + '/' + id).then(res => res.data);
  };
}

export default APIClient;
