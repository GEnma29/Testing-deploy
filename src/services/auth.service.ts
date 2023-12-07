import axios from 'axios'

const baseURL = import.meta.env.VITE_REACT_APP_BASEURL 
const AuthInstance = axios.create({
    baseURL: `${baseURL}/auth/api/auth`,
    timeout: 3000,
  });

  type Login = {
    data: {
    access_token: string
    }
  }

export const authService =  async ({email, password}:{ email: string , password: string}) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_BASEURL;
    console.log('url', apiUrl);

  const {data} = await AuthInstance.post<Login>('/login', {
        email,
        password
    })
    return data.data.access_token

}