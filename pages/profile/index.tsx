import ButtonSave from '@/components/buttons/ButtonSave';
import AddIcon from '@/components/Forms/AddIcon';
import { ReactElement, useState } from 'react';
import ProfileLayout from '../../components/layouts/ProfileLayout';
import { NextPageWithLayout } from '../_app';

interface Inputs {
  first_name: string;
  last_name: string;
}

interface Interest {
  id: number;
  img?: string;
  description: string;
}

interface PropsProfile {
  inputs?: Array<Inputs>;
  fileImage?: Array<Interest>;
  imagePreview: string | undefined;
}

const INITIAL_IMAGE = [
  {
    id: 1,
    img: 'https://i.pravatar.cc/158?u=marin',
    description: 'imagen de preferencia',
  },
  {
    id: 2,
    img: 'https://i.pravatar.cc/158?u=alan',
    description: 'imagen de preferencia',
  },
  {
    id: 3,
    img: 'https://i.pravatar.cc/158?u=fernando',
    description: 'imagen de preferencia',
  },
];

const Profile: NextPageWithLayout = () => {
  const [imagePreview, setImagePreview] =
    useState<PropsProfile['imagePreview']>(undefined);
  const [imagePreference, setImagePreference] =
    useState<PropsProfile['fileImage']>(undefined);

  const [image, setImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [tagId, setTagId] = useState<number | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setImage(result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="">
      <div className="py-9 bg-app-blue title-2">
        <h2 className="font-black text-app-grayLighter text-5xl leading-[56px] text-center">
          Perfil
        </h2>
      </div>
      <div className="app-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(firstName, lastName, tagId, image);
          }}
        >
          <section className="pt-[77px]">
            <h2 className="text-app-blackLight font-medium text-2xl leading-7 pb-[34px] text-center">
              Información de contacto
            </h2>

            <div className="flex flex-col w-full">
              <div className="w-[220px] h-[206px] rounded-[15px] overflow-hidden min-w-[220px] mx-auto">
                <input
                  onChange={handleFileChange}
                  className="hidden"
                  type="file"
                  name="add"
                  id="add-image"
                  accept="image/*"
                />
                <label
                  style={
                    image
                      ? {
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : {}
                  }
                  className="w-full bg-app-grayDark h-full relative flex"
                  htmlFor="add-image"
                >
                  {!image && <AddIcon />}
                </label>
              </div>

              <div className="flex flex-col pt-10 md:pt-5">
                <label className="relative" htmlFor="firstName">
                  First Name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 mb-2 md:mb-14 border border-app-grayLight rounded-[11px] duration-100 peer"
                  type="text"
                  name="firstName"
                  id="firstName"
                />

                <label className="pt-4 relative" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 border border-app-grayLight rounded-[11px]"
                  type="text"
                  name="LastName"
                  id="lastName"
                />
              </div>
            </div>

            <p className="text-app-grayDark font-normal w-[220px] pt-5 text-xs leading-[18px]">
              Agrega un foto para tu perfil
            </p>
          </section>

          <section className="pt-[57px] pb-[46px]">
            <h2 className="pb-7 font-medium leading-7 text-2xl text-center">
              Mis intereses
            </h2>
            <div>
              <select
                onChange={(e) => setTagId(Number(e.target.value))}
                defaultValue={''}
              >
                <option value="" disabled>
                  Categoría
                </option>
                <option value={'1'}>Ropa y accesorios</option>
                <option value={'2'}>Deportes</option>
                <option value={'3'}>Conciertos</option>
                <option value={'4'}>Meet & Greet</option>
                <option value={'5'}>E-sport</option>
                <option value={'6'}>Pop / Rock</option>
                <option value={'7'}>Tecnología</option>
                <option value={'8'}>Hogar / Decoración</option>
                <option value={'9'}>Abastecimiento</option>
              </select>
              {/* {!imagePreview && <AddIcon />}
              </label>
            ))} */}
            </div>
            <div className="w-full flex justify-center">
              <ButtonSave>Guardar Cambios</ButtonSave>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;

{
  /* {imagePreference?.map((file) => (
  <label
    key={file?.id}
    htmlFor={file.img}
    className="relative w-[105px] md:w-[177px] h-[123px] md:h-[206px]"
    style={{
      backgroundImage: `url(${imagePreview})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  > */
}
