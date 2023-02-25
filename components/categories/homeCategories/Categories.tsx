import Button from '@/components/buttons/Button';
interface ICategorie {
  name: string;
  id: number;
}

const categories: ICategorie[] = [
  {
    name: 'Ropa y accesorios',
    id: 1,
  },
  {
    name: 'Deportes',
    id: 2,
  },
  {
    name: 'Conciertos',
    id: 3,
  },
  {
    name: 'Meet & Greet',
    id: 4,
  },
  {
    name: 'E-Sports',
    id: 5,
  },
  {
    name: 'Pop - Rock',
    id: 6,
  },
  {
    name: 'Tecnología',
    id: 7,
  },
  {
    name: 'Hogar - Decoración',
    id: 8,
  },
  {
    name: 'Abastecimiento',
    id: 9,
  },
];

export default function Categories() {
  return (
    <div className="w-full pl-6 mt-12 bg-app-grayLight pb-11">
      <div className="max-w-[941px] mx-auto">
        <h2 className="pt-7 title-2 text-app-grayDark">
          ¡Hagámoslo más personal!
        </h2>
        <p className="subtitle-2 mt-2.5 w-3/4 text-app-grayDark">
          Selecciona tus interes para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
        <ul className="flex items-center gap-3 mt-6 overflow-x-auto">
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <Button>{categorie.name}</Button>
            </li>
          ))}
        </ul>
        <p className="mt-[60px] subtitle-2 text-app-blue">
          Ver todos los intereses
        </p>
      </div>
    </div>
  );
}
