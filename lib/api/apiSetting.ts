import { AxiosRequestConfig } from 'axios';

const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const apiConfig: AxiosRequestConfig = {
  httpsAgent: agent,
};
