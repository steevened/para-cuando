import ChangePasswordBackground from '@/components/auth/ChangePasswordBackground';
import PasswordRecoveryModal from '@/components/auth/PasswordRecoveryModal';

export default function passwordRecovery() {
  return (
    <>
      <ChangePasswordBackground>
        <div className="max-h-[540px]">
          <PasswordRecoveryModal />
        </div>
      </ChangePasswordBackground>
    </>
  );
}
