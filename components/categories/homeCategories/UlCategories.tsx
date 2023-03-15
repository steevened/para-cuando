import Button from '@/components/buttons/Button';
import { Type } from '@/lib/interfaces/publicationTypes/publicationTypes.interface';
import { usePublicationTypes } from '@/lib/services/publicationTypes/publicationTypes.services';
import Link from 'next/link';

export default function UlCategories() {
  const { data: categories, error, isLoading } = usePublicationTypes();

  return (
    <ul className="flex justify-between items-center w-full ">
      {categories?.map((categorie: Type) => (
        <li key={categorie.id}>
          <Link href={`/categories/${encodeURIComponent(categorie.name)}`}>
            <Button>{categorie.name}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
