import axios from 'axios'

const baseURL = import.meta.env.VITE_REACT_APP_BASEURL 

const EventsInstance = axios.create({
    baseURL: `${baseURL}/core/api/`,
    timeout: 3000,
  });
 
export const eventsFetcher = (url: string )=> EventsInstance.get(url).then(res => res.data);