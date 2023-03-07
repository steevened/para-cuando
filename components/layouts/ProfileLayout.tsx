import Children from '../../lib/interfaces/components.interface';
import Navbar from '../Navbar';
import FooterProfile from '../sliders/FooterProfile';
export default function ProfileLayout({ children }: Children) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterProfile />
    </>
  );
}
