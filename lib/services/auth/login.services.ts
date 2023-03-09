import { fetcher } from '@/lib/helpers/fetcher.helper';
import useSWR from 'swr';
import axios from '../../helpers/axios.helper';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  token: string;
}

function useLogin() {
  const { data, mutate } = useSWR('/auth/login', fetcher);

  const login = async (loginData: LoginData): Promise<LoginResponse> => {
    const response = await axios.post('/auth/login', loginData);

    mutate(response.data, false);
    return response.data;
  };

  return {
    // mutate,
    login,
    data,
  };
}

export default useLogin;
