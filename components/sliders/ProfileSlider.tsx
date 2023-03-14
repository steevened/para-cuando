import { usePublicationId } from '@/lib/services/publications/publicationId.services';
import { useUserVotes } from '@/lib/services/votes/userVotes.services';
import CardItem from './CardItem';

interface CardsContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

interface PublicationCardProps {
  publicationId: string;
}

const CardsContainer = ({ children }: CardsContainerProps) => {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-6 mt-16 app-container">
      {children}
    </div>
  );
};

function VotedPublicationsPage() {
  const { data, isLoading, error, mutate } = useUserVotes();

  // console.log(data);

  return (
    <>
      {data?.map((publication: any) => (
        <PublicationCard
          key={publication.publication_id}
          publication={publication}
          mutate={mutate}
        />
      ))}
    </>
  );
}

function PublicationCard({ publication, mutate }: any) {
  const { data, error, isLoading } = usePublicationId(
    publication.publications_id
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <CardItem
      mutate={mutate}
      reference_link={data.reference_link}
      id={data?.id}
      title={data?.title}
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
