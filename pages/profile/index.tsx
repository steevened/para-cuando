import ButtonSave from '@/components/buttons/ButtonSave';
import AddIcon from '@/components/Forms/AddIcon';
import { useProfile } from '@/lib/services/profile/ProfileInfo.services';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import ProfileLayout from '../../components/layouts/ProfileLayout';
import InputProfile from '../../components/profile/InputProfile';
import interestImg from '../../public/profile/interest.png';
import { NextPageWithLayout } from '../_app';

const Profile: NextPageWithLayout = () => {
  const [image, setImage] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [tagId, setTagId] = useState<number | null>(null);

  const {
    updateUser,
    addInterests,
    addImage,
    data: profileInfo,
    profileDetails,
    loadingDetails,
    mutate,
    mutateDetails,
  } = useProfile();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setImagePreview(result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImage(null);
      // setImagePreview(null);
    }
  };

  // console.log(image);

  useEffect(() => {
    if (profileDetails) {
      setImagePreview(profileDetails.result.image_url);
      setFirstName(profileDetails.result.first_name);
      setLastName(profileDetails.result.last_name);
    }
  }, [profileDetails]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    try {
      if (image) {
        const addImageResponse = await addImage(formData);
        console.log('------image response-------');
        console.log(addImageResponse);
      }
      mutate();
      mutateDetails();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Toaster />
      <div className="py-9 bg-app-blue title-2">
        <div className="md:app-container">
          <h2 className="font-black text-app-grayLighter text-5xl leading-[56px] text-center md:text-left">
            Perfil
          </h2>
        </div>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          {/* title and photo */}
          <section className="flex flex-col gap-20 mt-14 md:flex-row app-container">
            <div className="flex-[0.7] e">
              {/* title */}
              <h2 className="text-app-blackLight font-medium text-2xl leading-7 pb-[34px] text-center">
                Información de contacto
              </h2>
              {/* photo\ */}
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
                      : {
                          backgroundImage: `url(${imagePreview})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                  }
                  className="relative flex w-full h-full bg-app-grayDark"
                  htmlFor="add-image"
                >
                  {!image && !imagePreview && <AddIcon />}
                </label>
              </div>
              <div className="w-full text-center">
                <p className="text-app-grayDark font-normal  pt-2 text-xs leading-[18px]">
                  Agrega un foto para tu perfil
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center flex-1 w-full gap-10 md:pt-5">
              <InputProfile
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                id="firstName"
              />

              <InputProfile
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                id="lastName"
              />
            </div>
          </section>

          <section className="w-5/6 mx-auto mt-14">
            <h2 className="text-2xl font-medium leading-7 text-center md:text-left pb-7">
              Mis intereses
            </h2>

            {/* interests */}

            <ul className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">
              {profileDetails?.result.interests.map((interest) => (
                <li
                  key={interest.tag_id}
                  className="min-w-[300px] min-h-[152px] overflow-hidden rounded-2xl border relative"
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <Image src={interestImg} alt="event" />
                  <p className="absolute z-20 text-white -translate-x-1/2 bottom-3 left-1/2">
                    {interest.tags.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex justify-center w-full mt-10 mb-20">
              <ButtonSave type="submit">Guardar Cambios</ButtonSave>
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
  /* <div>
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
            </div> */
}
