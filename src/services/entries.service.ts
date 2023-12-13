import axios, { AxiosRequestConfig } from 'axios';
const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;

type EntryType = {
  name: string;
  label: string;
  price: number;
  seats_per_table: number;
  color: string;
  max_entries: number;
  type: string;
  full_table: boolean;
  active: boolean;
  event_id: string;
  properties: any;
};
export const entriesInstance = axios.create({
  baseURL: `${baseURL}/core/api/`,
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

entriesInstance.interceptors.request.use((request: any) => {
  if (request.url?.includes('login')) return request;
  return updateHeader(request);
});

export const entriesFetcher = (url: string) =>
  entriesInstance.get(url).then((res) => res.data);

export const createEntry = (url: string, { arg }: { arg: EntryType }) =>
  fetch(`${baseURL}/core/api${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      'Content-Type': 'application/json',
    },
  });

export const updateEntry = (
  url: string,
  { arg }: { arg: Partial<EntryType> },
) =>
  fetch(`${baseURL}/core/api${url}`, {
    method: 'PUT',
    body: JSON.stringify(arg),
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      'Content-Type': 'application/json',
    },
  });
