import ChangePasswordBackground from '@/components/auth/ChangePasswordBackground';
import ChangePasswordModal from '@/components/auth/ChangePasswordModal';
import { Toaster } from 'react-hot-toast';

export default function changePassword() {
  return (
    <>
      <Toaster />
      <ChangePasswordBackground>
        <div className="max-h-[540px]">
          <ChangePasswordModal />
        </div>
      </ChangePasswordBackground>
    </>
  );
}
