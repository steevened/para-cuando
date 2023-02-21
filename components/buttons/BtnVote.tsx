interface Props {
  voted: boolean;
}

export default function BtnVote({ voted }: Props) {
  return (
    <button
      className={`${
        voted ? 'bg-app-pink' : 'bg-transparent border border-app-blue '
      }  py-2 px-4 text-base font-medium rounded-3xl max-w-sm w-full`}
    >
      {voted ? 'Retirar mi voto' : 'Votar'}
    </button>
  );
}
