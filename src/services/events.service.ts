import axios, { AxiosRequestConfig } from 'axios'

const baseURL = import.meta.env.VITE_REACT_APP_BASEURL 

type Event = {
  name: string;
  description: string;
  position: number;
  active: boolean;
  img: string;
}
type UpdateEventData = Partial<Event>
type CreateEventData = Event

const token = localStorage.getItem('access_token') || '';
const EventsInstance = axios.create({
    baseURL: `${baseURL}/core/api/`,
    timeout: 3000,
  });

  const updateHeader = (request: AxiosRequestConfig) => {
    const token = localStorage.getItem('access_token')
    console.log('token', token);
    const newHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    request.headers = newHeaders
    return request
}



    EventsInstance.interceptors.request.use((request: any) => {
      if (request.url?.includes('login')) return request;
      return updateHeader(request);
    });

 
export const eventsFetcher = (url: string )=> EventsInstance.get(url).then(res => res.data);

// create event
export const createEvent =(data: CreateEventData) => EventsInstance.post(`events`, data).then(res => res.data)
// update event 
export const updateEvent =(eventId: string ,data: UpdateEventData) => EventsInstance.post(`events/${eventId}`, data).then(res => res.data)
