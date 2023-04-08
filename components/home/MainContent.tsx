import { Publications } from '@/lib/interfaces/publications/publications.interface';
import { FC } from 'react';
import Categories from '../categories/homeCategories/Categories';
import SectionSlider from '../sliders/SectionSlider';

interface Props {
  publications: Publications;
}

const MainContent: FC<Props> = ({ publications }) => {
  return (
    <div className="mt-5 app-container max-w-[975px] mx-auto">
      <SectionSlider
        title="Populares en Querétaro"
        subtitle="Lo que las personas piden más"
        publications={publications}
      />
      <SectionSlider
        title="Sugerencias para ti"
        subtitle="Publicaciones que podrías colaborar"
        publications={publications}
      />
      <Categories />
      <SectionSlider
        className="mb-24"
        title="Recientes"
        subtitle="Las personas últimamente están hablando de esto"
        publications={publications}
      />
    </div>
  );
};

export default MainContent;
