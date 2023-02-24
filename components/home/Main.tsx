import HomeSlider from '../sliders/HomeSlider';

interface SectionProps {
  title: string;
  subtitle: string;
}

export default function Main() {
  return (
    <div>
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
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <HomeSlider />
    </div>
  );
}
