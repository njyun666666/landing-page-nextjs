import { iPage } from './../models/iPage';
import axios from 'axios';
import { apiConfig } from './apiSetting';

const api_url = process.env.NEXT_PUBLIC_API_URL;

const pageAPI = {
  get: (path: string) => {
    return axios.get<iPage>(`${api_url}/api/Page/${path}`, apiConfig);
  },
};

export default pageAPI;
