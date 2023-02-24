import Categories from '../categories/homeCategories/Categories';
import HomeSlider from '../sliders/HomeSlider';

interface SectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function Main() {
  return (
    <main className="mt-5">
      <Section
        title="Populares en Querétaro"
        subtitle="Lo que las personas piden más"
      />
      <Section
        title="Sugerencias para ti"
        subtitle="Publicaciones que podrías colaborar"
      />
      <Categories />
      <Section
        className="mb-24"
        title="Recientes"
        subtitle="Las personas últimamente están hablando de esto"
      />
    </main>
  );
}

function Section({ title, subtitle, className }: SectionProps) {
  return (
    <div className={`pl-5 max-w-[1103px] mx-auto mt-12 ${className}`}>
      <h2 className="title-2 mt-2.5">{title}</h2>
      <p className="mt-2 subtitle-2 text-app-grayDark">{subtitle}</p>
      <HomeSlider className="mt-9" />
    </div>
  );
}
