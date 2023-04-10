import Background from '@/components/auth/Background';
import LoginModal from '@/components/auth/LoginModal';
import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Log In - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>

      <Background>
        <LoginModal />
      </Background>
    </>
  );
}
