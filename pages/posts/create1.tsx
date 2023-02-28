import Link from 'next/link';

export default function create1() {
  return (
    <>
      <div>
        <h2 className="not-italic font-medium text-xl text-app-blue">
          <Link href="/">Back</Link>
        </h2>
      </div>
    </>
  );
}
