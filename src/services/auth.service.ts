import { ROLES } from '@/models';
import axios , {AxiosRequestConfig} from 'axios';

const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;

const AuthInstance = axios.create({
  baseURL: `${baseURL}/auth/api`,
  timeout: 3000,
});

type Login = {
  data: {
    access_token: string;
  };
};

type ResponseLogin = {
  access_token: string;
};

const updateHeader = (request: AxiosRequestConfig) => {
  const token = localStorage.getItem('access_token');
  const newHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  request.headers = newHeaders;
  return request;
};

AuthInstance.interceptors.request.use((request: any) => {
  if (request.url?.includes('login')) return request;
  return updateHeader(request);
});



export const managerFetcher = (url: string) => AuthInstance.get(url).then((res) => res.data);
export const authService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ResponseLogin> => {
  const { data } = await AuthInstance.post<Login>('/auth/login', {
    email,
    password,
  });
  return {
    access_token: data.data.access_token,
  };
};
type CreateUserType = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  identity: number;
  address: string;
  active: boolean;
  birthday: string; // Puedes ajustar el tipo de acuerdo a tus necesidades específicas
  image: Buffer; // Otra opción sería usar 'string' si estás manejando una representación en base64
  role: ROLES[]; // Siempre un array de roles
  status: string; 
}

type UpdateUserType = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  identity: number;
  address: string;
  active: boolean;
}

export async function createUser(url: string, { arg }: {arg: FormData }) {
  const token = localStorage.getItem('access_token');
  return fetch(`${baseURL}/auth/api${url}`, {
    method: 'POST',
    body: arg,
    headers:{
      Authorization: `Bearer ${token}`,
    }
  }).then(res => res.json())
}
export async function UpdateUser(url: string, { arg }: { arg: FormData }) {
  const token = localStorage.getItem('access_token');
  return fetch(`${baseURL}/auth/api${url}`, {
    method: 'PUT',
    body:arg,
    headers:{
      Authorization: `Bearer ${token}`,
      
    }
  }).then(res => res.json())
}
