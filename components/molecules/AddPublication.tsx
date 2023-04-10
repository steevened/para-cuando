import Link from 'next/link';
import { AddIcon } from '../atoms/AddIcon';

export const AddPublication = () => {
  return (
    <Link href="/posts/create" className="flex items-center gap-2">
      <AddIcon />
      <span className="hidden text-2 sm:subtitle-2 text-app-blue sm:block">
        Crear Publicación
      </span>
    </Link>
  );
};
