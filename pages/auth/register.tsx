import Button from '@/components/buttons/Button';
import Head from 'next/head';
import Link from 'next/link';

export default function register() {
  return (
    <>
      <Head>
        <title>Sign Up - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <div className="flex flex-col items-center justify-start h-screen gap-10 pt-10 text-white bg-app-blackLight">
        <Link href="/">
          <Button>Página principal</Button>
        </Link>
        <h1 className="title-1 ">Sign Up</h1>
      </div>
    </>
  );
}
