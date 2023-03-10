import axios from '../../helpers/axios.helper';

interface LoginData {
  email: string;
  password: string;
}

// interface LoginResponse {
//   email: string;
//   token: string;
// }

function login(data: LoginData) {
  return axios.post('/auth/login', data);
}

function signUp(data: any) {
  return axios.post('/auth/sign-up', data);
}

export { login, signUp };
