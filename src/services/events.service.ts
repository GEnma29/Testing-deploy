import axios, { AxiosRequestConfig } from 'axios'
const baseURL = import.meta.env.VITE_REACT_APP_BASEURL 

type Event = {
  name: string;
  description: string;
  position: number;
  active: boolean;
  img: File;
}
type UpdateEventData = Partial<Event>
type CreateEventData = Event

export const EventsInstance = axios.create({
    baseURL: `${baseURL}/core/api/`,
    timeout: 3000,
  });

  const updateHeader = (request: AxiosRequestConfig) => {
    const token = localStorage.getItem('access_token')
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



export async function createEventSWR(url : string, { arg }: { arg: any }) {
  await fetch(`${baseURL}/core/api/${url}`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    body: arg
  })
}
// create event
export const createEvent =  (data: FormData) =>  fetch(`${baseURL}/core/api/events`, {
  method: 'POST',
  body: data,
  headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  }

})

export const updateEvent = (url : string, { arg }: { arg: FormData }) => fetch(`${baseURL}/core/api/${url}`, {
  method:'PUT',
  body: arg,
  headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  }
})
// testing with axios
export const updateEventAxios = (eventId: string ,data: FormData) => EventsInstance.post(`/${eventId}`, data)

