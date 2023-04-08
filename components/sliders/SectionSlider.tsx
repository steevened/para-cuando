import { Publications } from '@/lib/interfaces/publications/publications.interface';
import { FC } from 'react';
import PublicationsSlider from './PublicationsSlider';

interface SectionProps {
  title: string;
  subtitle: string;
  className?: string;
  publications: Publications;
}

const SectionSlider: FC<SectionProps> = ({
  title,
  subtitle,
  className,
  publications,
}) => {
  return (
    <div className={`mx-auto mt-12 ${className}`}>
      <div className={`max-w-[1103px] mx-auto mt-12 md:pl-0 ${className}`}>
        <h2 className="title-2 mt-2.5">{title}</h2>
        <p className="mt-2 subtitle-2 text-app-grayDark">{subtitle}</p>
        <PublicationsSlider className="mt-9" publications={publications} />
      </div>
    </div>
  );
};

export default SectionSlider;
