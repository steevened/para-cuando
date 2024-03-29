import { FC } from 'react';
import Categories from '../categories/homeCategories/Categories';
import SectionSlider from '../sliders/SectionSlider';

const MainContent: FC = () => {
  return (
    <div className="mt-5 app-container max-w-[975px] mx-auto">
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
    </div>
  );
};

export default MainContent;
