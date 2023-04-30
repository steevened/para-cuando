import Button from '@/components/buttons/Button';
import { Type } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { usePublicationTypes } from '@/lib/services/publicationTypes/publicationTypes.services';
import Link from 'next/link';
import { FC } from 'react';
interface Props {
  // publicationTypes: Types;
}

const PostCategories: FC<Props> = () => {
  const { data: publicationTypes } = usePublicationTypes();
  return (
    <ul className="flex items-center justify-between w-full ">
      {publicationTypes?.map((categorie: Type) => (
        <li key={categorie.id}>
          <Link href={`/categories/${categorie.id}`}>
            <Button>{categorie.name}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default PostCategories;
