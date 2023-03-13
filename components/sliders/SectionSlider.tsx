import HomeSlider from './HomeSlider';

interface SectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionSlider({
  title,
  subtitle,
  className,
}: SectionProps) {
  return (
    <div className={`mx-auto mt-12 ${className}`}>
      <h2 className="title-2 mt-2.5">{title}</h2>
      <p className="mt-2 subtitle-2 text-app-grayDark">{subtitle}</p>
      <HomeSlider className="mt-9" />
    </div>
  );
}
