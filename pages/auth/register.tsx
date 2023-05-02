import RegisterModal from '@/components/auth/RegisterModal';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { NextPageWithLayout } from '../_app';

const Register: NextPageWithLayout = () => {
  // const {data} = useSWR
  return (
    <>
      <RegisterModal />
    </>
  );
};

Register.getLayout = (page) => {
  return <AuthLayout title="Register - Para Cuándo">{page}</AuthLayout>;
};

export default Register;
