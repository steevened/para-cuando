// import BtnNext from '@/components/buttons/BtnNext';
// import {
//   createPublication,
//   uploadImgPublication,
// } from '@/lib/services/publications/publications.services';

// import { Form, Formik } from 'formik';
// import { useRouter } from 'next/router';
// import { FC } from 'react';
// import { toast } from 'react-hot-toast';
// import * as Yup from 'yup';
// import InputGroup from '../InputFiles/InputGroup';
// import TextInput from '../TextInput';

// interface Props extends CreatePageProps {
//   steps: number;
//   setSteps: (_n: number) => void;
// }

// const firstValidationSchema = Yup.object({
//   title: Yup.string().required('Required'),
//   publications_types_id: Yup.number().required('Required'),
//   tags: Yup.number().required('Required'),
//   description: Yup.string().required('Required'),
//   reference_link: Yup.string().required('Required'),
// });

// const lastValidationSchema = Yup.object({
//   title: Yup.string().required('Required'),
//   publications_types_id: Yup.number().required('Required'),
//   tags: Yup.number().required('Required'),
//   description: Yup.string().required('Required'),
//   reference_link: Yup.string().required('Required'),
//   images: Yup.array().test(
//     'at least one image',
//     'At least one image is required',
//     (arr) => {
//       return arr && arr.some((image) => image !== null);
//     }
//   ),
// });

// interface IInputFles {
//   name: string;
//   id: number;
// }

// const inputFiles: IInputFles[] = [
//   { name: 'img-1', id: 1 },
//   { name: 'img-2', id: 2 },
//   { name: 'img-3', id: 3 },
// ];

// const TwoStepForm2: FC<Props> = ({ steps, setSteps, tags, types }) => {
//   console.log(types);

//   const router = useRouter();

//   return (
//     <Formik
//       initialValues={{
//         title: '',
//         publications_types_id: null,
//         tags: null,
//         description: '',
//         reference_link: '',
//         images: [null, null, null],
//       }}
//       validationSchema={
//         steps === 1 ? firstValidationSchema : lastValidationSchema
//       }
//       onSubmit={async (values, { setSubmitting }) => {
//         if (steps === 1) {
//           setSteps(2);
//           setSubmitting(false);
//         } else {
//           const { tags, images, ...resValues } = values;
//           const tagsArr = [Number(tags)];
//           const formValues = {
//             ...resValues,
//             tags: tagsArr,
//             content: 'default',
//           };

//           const toasterPromise = toast.promise(createPublication(formValues), {
//             error: 'Intente nuevamente',
//             loading: 'Cargando...',
//             success: 'Publicación creada!',
//           });

//           try {
//             const response = await toasterPromise;
//             // console.log(response);
//             try {
//               const imagesArr = images.filter((image) => image !== null);
//               const image = imagesArr[0];
//               const formData = new FormData();
//               if (image !== null) {
//                 formData.append('image', image);
//               } else {
//                 console.log('no formData');
//               }
//               await uploadImgPublication(
//                 formData,
//                 response.data.publication_id
//               );
//             } catch (error) {
//               console.log(error);
//             }
//           } catch (error) {
//             console.log(error);
//           }

//           // -----
//           router.push('/');
//           setSubmitting(false);
//         }
//       }}
//     >
//       <Form className="mt-11">
//         {steps === 1 ? (
//           <>
//             <TextInput
//               label="Titulo de la publicación"
//               name="title"
//               type="text"
//             />
//             <div className="flex flex-col gap-5 sm:flex-row">
//               {/* <select name="" id="">

//               </select> */}
//               <select
//                 // label="Tipo"
//                 name="publications_types_id"
//                 className="w-full mt-6"
//                 defaultValue={''}
//               >
//                 <option value="" disabled>
//                   Tipo
//                 </option>
//                 {types.results.map((tipo) => (
//                   <option key={tipo.id} value={tipo.id}>
//                     {tipo.name}
//                   </option>
//                 ))}
//               </select>

//               {/* <select label="Categoria" name="tags" className="w-full mt-6">
//                 <option value="" disabled>
//                   Categoria
//                 </option>
//                 {categories.map((categorie) => (
//                   <option key={categorie.id} value={categorie.id}>
//                     {categorie.name}
//                   </option>
//                 ))}
//               </select> */}
//             </div>
//             <TextInput
//               label="¿Por qué lo recomiendas?"
//               name="description"
//               type="text"
//               className="mt-6"
//             />
//             <div className="mt-4">
//               <TextInput
//                 label="Link de referencia"
//                 name="reference_link"
//                 type="text"
//               />
//             </div>
//             <div className="flex justify-center w-full mt-11">
//               <BtnNext
//                 // disabled={!isValid}
//                 onClick={() => setSteps(2)}
//                 // type={'button'}
//                 className=""
//               >
//                 Siguiente
//               </BtnNext>
//             </div>
//           </>
//         ) : (
//           <>
//             <InputGroup inputFiles={inputFiles} className="mt-6" />
//             <div className="flex justify-center w-full mt-11">
//               <BtnNext className="">Publicar</BtnNext>
//             </div>
//           </>
//         )}
//       </Form>
//     </Formik>
//   );
// };

// export default TwoStepForm2;

import { FC } from 'react';

interface TwoStepForm2Props {}

const TwoStepForm2: FC<TwoStepForm2Props> = () => {
  return <div>TwoStepForm2</div>;
};

export default TwoStepForm2;
