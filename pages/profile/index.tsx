import { ReactElement } from 'react';
import ProfileLayout from '../../components/layouts/ProfileLayout';
import { NextPageWithLayout } from '../_app';
const Profile: NextPageWithLayout = () => {
  return <div>Profile</div>;
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
