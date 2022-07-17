import axios from 'axios';
import { iHeader } from '../models/iHeader';

const api_url = process.env.NEXT_PUBLIC_API_URL;
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const headerAPI = {
  get: () => {
    return axios.get<iHeader>(`${api_url}/api/Header`, { httpsAgent: agent });
    // return fetcher(`${api_url}/api/Header`);
  },
};

export default headerAPI;
