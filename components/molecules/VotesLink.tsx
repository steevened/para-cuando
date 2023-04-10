import Link from 'next/link';
import { VotesLogo } from '../svg/Svg';

export const VotesLink = () => {
  return (
    <Link href="/profile/votes" className="hidden gap-2 md:flex">
      <VotesLogo />
      {/* <Image src={votesLogo} alt="votes logo" /> */}
      <p className="text-white text-2">Mis votos</p>
    </Link>
  );
};
