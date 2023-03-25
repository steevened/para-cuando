import Children from '@/lib/interfaces/components.interface';
import heroImg from '../../public/authRegister/bg.png';

const styles = {
  backgroundImage: `url('${heroImg.src}')`,
};
export default function ChangePasswordBackground({ children }: Children) {
  return (
    <div
      style={styles}
      className="h-screen flex items-center justify-center bg-center bg-no-repeat"
    >
      {children}
    </div>
  );
}
