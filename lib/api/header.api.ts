import { apiConfig } from './apiSetting';
import axios from 'axios';
import { iHeader } from '../models/iHeader';

const api_url = process.env.NEXT_PUBLIC_API_URL;

const headerAPI = {
  get: () => {
    return axios.get<iHeader>(`${api_url}/api/Header`, apiConfig);
    // return fetcher(`${api_url}/api/Header`);
  },
};

export default headerAPI;
