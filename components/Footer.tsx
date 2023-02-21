import imgFooter from '../public/footerImg.jpg';
import Input from './Forms/Input';

const styles = {
  backgroundImage: `url('${imgFooter.src}')`,
};

export default function Footer() {
  return (
    <div
      style={styles}
      className="h-[486px] bg-cover bg-none bg-center flex items-center justify-center"
    >
      <Input />
    </div>
  );
}
