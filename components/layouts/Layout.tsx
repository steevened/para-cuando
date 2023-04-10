import { Toaster } from 'react-hot-toast';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <Toaster />

      <main>{children}</main>
      <Footer />
    </>
  );
}
