import axios from 'axios';

const configOMB = {
  baseURL: 'http://localhost:3000/',
};
const axiosInstance = axios.create(configOMB);
export type UserType = {
  id: number,
  name: string,
  password: string
}
const API = {
  getUserMe: (name: string, password: string) => {
    return axiosInstance.get(`users?login=${name}&password=${password}`);
  },
  getUsers: (name: string) => {
    return axiosInstance.get(`contacts?${name}`)
  },
};


export default API;
