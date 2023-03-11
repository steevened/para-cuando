import AddIcon from '@/components/Forms/AddIcon';
import { ReactElement, useState } from 'react';
import ProfileLayout from '../../components/layouts/ProfileLayout';
import { NextPageWithLayout } from '../_app';

interface Inputs {
  first_name: string;
  last_name: string;
}

interface InputImage {
  id: number;
  img?: string;
}

interface PropsProfile {
  inputs?: Array<Inputs>;
  fileImage?: Array<InputImage>;
  imagePreview: string | undefined;
}

const INITIAL_IMAGE = [
  {
    id: 1,
    img: 'https://i.pravatar.cc/158?u=marin',
  },
  {
    id: 2,
    img: 'https://i.pravatar.cc/158?u=alan',
  },
  {
    id: 3,
    img: 'https://i.pravatar.cc/158?u=fernando',
  },
];

const Profile: NextPageWithLayout = () => {
  const [imagePreview, setImagePreview] =
    useState<PropsProfile['imagePreview']>(undefined);
  const [imagePreference, setImagePreference] =
    useState<PropsProfile['fileImage']>(undefined);

  return (
    <div className="">
      <div className="px-44 py-9 bg-app-blue title-2">
        <h2 className="font-black text-app-grayLighter text-5xl leading-[56px]">
          Perfil
        </h2>
      </div>
      <div className="px-44">
        <section className="pt-[77px]">
          <h2 className="text-app-blackLight font-medium text-2xl leading-7 pb-[34px]">
            Información de contacto
          </h2>

          <div className="flex flex-row">
            <div className="w-[220px] h-[206px] rounded-[15px] overflow-hidden min-w-[220px]">
              <input className="hidden" type="file" name="add" id="add-image" />
              <label
                className="w-full bg-app-grayDark h-full relative flex"
                htmlFor="add-image"
              >
                <AddIcon />
              </label>
            </div>

            <div className="pl-20 flex flex-col w-screen pt-5">
              <label className="relative" htmlFor="firstName">
                First Name
              </label>
              <input
                className="h-12 mb-14 border border-app-grayLight rounded-[11px] duration-100 peer"
                type="text"
                name="firstName"
                id="firstName"
              />

              <label className="pt-6 relative" htmlFor="lastName">
                Last Name
              </label>
              <input
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
          <h2 className="pb-7 font-medium leading-7 text-2xl">Mis interese</h2>
          <div>
            {/* <RenderImage imagePreview={imagePreview} fileImage={fileImage} /> */}

            {imagePreference?.map((file) => (
              <label
                key={file?.id}
                htmlFor={file.img}
                className="relative w-[105px] md:w-[177px] h-[123px] md:h-[206px]"
                style={{
                  backgroundImage: `url(${imagePreview})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <select defaultValue={''} name={file.img}>
                  <option value="categorie" disabled>
                    Categoría
                  </option>
                  <option value="Ropa_accesorios">Ropa y accesorios</option>
                  <option value="Deportes">Deportes</option>
                  <option value="Conciertos">Conciertos</option>
                  <option value="Meet-Greet">Meet & Greet</option>
                  <option value="E-sport">E-sport</option>
                  <option value="Pop-Rock">Pop / Rock</option>
                  <option value="Tecnologia">Tecnología</option>
                  <option value="Hogar-Decoracion">Hogar / Decoración</option>
                  <option value="Abastecimiento">Abastecimiento</option>
                </select>
                {!imagePreview && <AddIcon />}
              </label>
            ))}
          </div>
          <button
            className="w-[190px] bg-app-blue text-app-grayLighter py-[13.5px] px-6 leading-5 text-[16px] font-semibold rounded-full mx-[50%] my-11"
            type="submit"
          >
            Guardar cambios
          </button>
        </section>
      </div>
    </div>
  );
};
/**
const RenderImage = ({ fileImage, imagePreview }: PropsProfile) => {
  return (
    <div>
      {fileImage?.map((file) => (
        <label
          key={file?.img}
          htmlFor={file.img}
          className="relative w-[105px] md:w-[177px] h-[123px] md:h-[206px]"
          style={{
            backgroundImage: `url(${imagePreview})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <select defaultValue={''} name={file.img}>
            <option value="categorie" disabled>
              Categoría
            </option>
            <option value="Ropa_accesorios">Ropa y accesorios</option>
            <option value="Deportes">Deportes</option>
            <option value="Conciertos">Conciertos</option>
            <option value="Meet-Greet">Meet & Greet</option>
            <option value="E-sport">E-sport</option>
            <option value="Pop-Rock">Pop / Rock</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Hogar-Decoracion">Hogar / Decoración</option>
            <option value="Abastecimiento">Abastecimiento</option>
          </select>
          {!imagePreview && <AddIcon />}
        </label>
      ))}
    </div>
  );
};
*/

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
