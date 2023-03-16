import Background from '@/components/auth/Background';
import LoginModal from '@/components/auth/LoginModal';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function Login() {
  return (
    <>
      <Head>
        <title>Log In - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Toaster />
      <Background>
        <LoginModal />
      </Background>
    </>
  );
}
