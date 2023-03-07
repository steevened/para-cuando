import imgFooter from '../../public/footerImg.jpg';

const styles = {
  backgroundImage: `url('${imgFooter.src}')`,
};

export default function FooterProfile() {
  return (
    <div
      style={styles}
      className="h-[182px] px-5 pt-44 bg-cover bg-none bg-center flex items-center justify-center"
    ></div>
  );
}
