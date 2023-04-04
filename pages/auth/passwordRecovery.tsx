import ChangePasswordBackground from '@/components/auth/ChangePasswordBackground';
import PasswordRecoveryModal from '@/components/auth/PasswordRecoveryModal';
import { Toaster } from 'react-hot-toast';

export default function passwordRecovery() {
  return (
    <>
      <Toaster />
      <ChangePasswordBackground>
        <div className="max-h-[540px]">
          <PasswordRecoveryModal />
        </div>
      </ChangePasswordBackground>
    </>
  );
}
