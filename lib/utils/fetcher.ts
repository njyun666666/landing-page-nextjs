import axios from 'axios';
const api_url = process.env.NEXT_PUBLIC_API_URL;

const updateOptions = () => {
  if (typeof window === 'undefined') return {};

  if (!window.localStorage.token) return {};

  if (Object.keys(window.localStorage.token).length === 0) return {};

  const token = JSON.parse(window.localStorage.token);

  if (!!token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
};

export default async function fetcher<T = any>(url: string) {
  const { data } = await axios.get<T>(api_url + url, updateOptions());
  return data;
}
