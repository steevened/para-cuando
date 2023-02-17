import { useRouter } from 'next/router';
export default function CategoryPage() {
  const router = useRouter();
  const { id, title } = router.query;
  console.log(title);

  return <div>Category {id}</div>;
}
