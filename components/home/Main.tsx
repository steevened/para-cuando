import HomeSlider from '../sliders/HomeSlider';

interface SectionProps {
  title: string;
  subtitle: string;
}

export default function Main() {
  return (
    <div className="my-5">
      <Section
        title="Populares en Querétaro"
        subtitle="Lo que las personas piden más"
      />
      <Section title="Título 2" subtitle="Subtítulo 2" />
    </div>
  );
}

function Section({ title, subtitle }: SectionProps) {
  return (
    <div className="pl-5 max-w-[1103px] mx-auto mt-12">
      <h2 className="title-2 mt-2.5">{title}</h2>
      <p className="mt-2 subtitle-2 text-app-grayDark">{subtitle}</p>
      <HomeSlider className="mt-9" />
    </div>
  );
}
