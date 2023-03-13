import Background from '@/components/auth/Background';
import RegisterModal from '@/components/auth/RegisterModal';
import Head from 'next/head';

export default function register() {
  // const {data} = useSWR
  return (
    <>
      <Head>
        <title>Sign Up - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>

      <Background>
        <RegisterModal />
      </Background>
    </>
  );
}
