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
    <div className={`max-w-[1103px] mx-auto mt-12 md:pl-0 ${className}`}>
      <h2 className="title-2 mt-2.5">{title}</h2>
      <p className="mt-2 subtitle-2 text-app-grayDark">{subtitle}</p>
      <HomeSlider className="mt-9" />
    </div>
  );
}
