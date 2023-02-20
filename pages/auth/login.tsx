import Head from 'next/head';
import Link from 'next/link';

export default function login() {
  return (
    <>
      <Head>
        <title>Log In - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <div className="flex flex-col items-center justify-start gap-10 bg-app-blackLight text-white h-screen  pt-10">
        <Link href="/">
          <button className="px-4 py-2 rounded-lg shadow-lg bg-slate-700 ">
            Página principal
          </button>
        </Link>
        <h1 className="title-1 ">login</h1>
      </div>
    </>
  );
}
