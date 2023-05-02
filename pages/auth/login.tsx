import LoginModal from '@/components/auth/LoginModal';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const Login: NextPageWithLayout = () => {
  return <LoginModal />;
};

Login.getLayout = (page: ReactElement) => {
  return <AuthLayout title="Log In - Para Cuándo">{page}</AuthLayout>;
};

export default Login;
