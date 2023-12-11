import axios, { AxiosRequestConfig } from "axios"
import { SnackbarUtilities } from "../utilities/snackbar-manager";
import { getValidationError } from "../utilities/get-validation-error";

export const AxiosInterceptor = () => {
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
  
    axios.interceptors.request.use((request: any) => {
      if (request.url?.includes('login')) return request;
      return updateHeader(request);
    });
  
    axios.interceptors.response.use(
      (response) => {
        console.log('response', response);
        SnackbarUtilities.success('Success');
        return response;
      },
      (error) => {
       SnackbarUtilities.error(getValidationError(error.code));
        return Promise.reject(error);
      }
    );
  };