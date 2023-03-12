import { usePublicationId } from '@/lib/services/publications/publicationId.services';
import { usePublicationsVoted } from '@/lib/services/votes/userVotes.services';
import 'swiper/css';
import CardItem from './CardItem';

interface CardsContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

interface PublicationCardProps {
  publicationId: string;
}

const CardsContainer = ({ children }: CardsContainerProps) => {
  return (
    <div className="relative flex flex-col flex-wrap items-center justify-center pt-20 500 md:flex-row app-container">
      {children}
    </div>
  );
};

function VotedPublicationsPage() {
  const { publicationsId } = usePublicationsVoted();

  return (
    <div>
      {publicationsId?.map((publicationId: string) => (
        <PublicationCard key={publicationId} publicationId={publicationId} />
      ))}
    </div>
  );
}

function PublicationCard({ publicationId }: PublicationCardProps) {
  const { data, error, isLoading } = usePublicationId(publicationId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <CardItem
      id={data?.id}
      title={data?.title}
      content={data?.content}
      description={data?.description}
      votes_count={data?.votes_count}
    />
  );
}

export default function ProfileSlider() {
  return (
    <CardsContainer>
      <VotedPublicationsPage />
    </CardsContainer>
  );
}
