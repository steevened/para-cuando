import Categories from '../categories/homeCategories/Categories';
import SectionSlider from '../sliders/SectionSlider';

export default function Main() {
  return (
    <main className="mt-5 w-full max-w-[941px] mx-auto">
      <SectionSlider
        title="Populares en Querétaro"
        subtitle="Lo que las personas piden más"
      />
      <SectionSlider
        title="Sugerencias para ti"
        subtitle="Publicaciones que podrías colaborar"
      />
      <Categories />
      <SectionSlider
        className="mb-24"
        title="Recientes"
        subtitle="Las personas últimamente están hablando de esto"
      />
    </main>
  );
}
