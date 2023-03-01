import Button from '@/components/buttons/Button';
import Link from 'next/link';

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Marcas y tiendas', id: 1 },
  { title: 'Artistas y conciertos', id: 2 },
  { title: 'Torneos', id: 3 },
];

export default function UlCategories() {
  return (
    <ul className="flex justify-between items-center w-full ">
      {categories.map((categorie) => (
        <li key={categorie.id}>
          <Link href={`/categories/${encodeURIComponent(categorie.title)}`}>
            <Button>{categorie.title}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
