import Button from '@/components/buttons/Button';
import {
  Type,
  Types,
} from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import Link from 'next/link';
import { FC } from 'react';
interface Props {
  publicationTypes: Types;
}

const PostCategories: FC<Props> = ({ publicationTypes }) => {
  return (
    <ul className="flex items-center justify-between w-full ">
      {publicationTypes?.results.map((categorie: Type) => (
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
