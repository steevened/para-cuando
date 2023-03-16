import Background from '@/components/auth/Background';
import RegisterModal from '@/components/auth/RegisterModal';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function register() {
  // const {data} = useSWR
  return (
    <>
      <Head>
        <title>Sign Up - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Toaster />
      <Background>
        <RegisterModal />
      </Background>
    </>
  );
}
