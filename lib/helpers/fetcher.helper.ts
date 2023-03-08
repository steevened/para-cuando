import axios from './axios.helper';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
