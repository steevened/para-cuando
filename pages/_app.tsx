import { AuthModalProvider } from '@/context';
import { AuthProvider } from '@/context/auth';
import '@/styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AuthProvider>
      <AuthModalProvider>
        {getLayout(<Component {...pageProps} />)}
      </AuthModalProvider>
    </AuthProvider>
  );
}
