interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  voted: boolean;
}
export default function BtnVote({ voted, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        voted ? 'bg-app-pink' : 'bg-app-blue  border border-app-blue '
      }  py-2 px-4 text-base text-white font-medium rounded-3xl w-full`}
    >
      {voted ? 'Retirar mi voto' : 'Votar'}
    </button>
  );
}
