import axios, { AxiosRequestConfig } from 'axios';
const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;


export const orderInstance = axios.create({
  baseURL: `${baseURL}/orders/api/`,
  timeout: 3000,
});

const updateHeader = (request: AxiosRequestConfig) => {
  const token = localStorage.getItem('access_token');
  const newHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  request.headers = newHeaders;
  return request;
};

orderInstance.interceptors.request.use((request: any) => {
  if (request.url?.includes('login')) return request;
  return updateHeader(request);
});

export const ordersFetcher = (url: string) =>
orderInstance.get(url).then((res) => res.data);

// create even