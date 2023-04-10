import ChangePasswordBackground from '@/components/auth/ChangePasswordBackground';
import ChangePasswordModal from '@/components/auth/ChangePasswordModal';

export default function changePassword() {
  return (
    <>
      <ChangePasswordBackground>
        <div className="max-h-[540px]">
          <ChangePasswordModal />
        </div>
      </ChangePasswordBackground>
    </>
  );
}
