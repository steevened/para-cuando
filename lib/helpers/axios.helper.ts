import axios from 'axios';
import Cookie from 'js-cookie';
import getConfig from 'next/config';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();

const BASE_URL = publicRuntimeConfig.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response && error.response === 401) {
      Router.push('/');
    }
    return Promise.reject(error);
  }
);

export default instance;

async function getTokenFromCookie() {
  return Cookie.get('token');
}
