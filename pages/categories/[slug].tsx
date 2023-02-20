import { useRouter } from 'next/router';
export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <div>Category {slug}</div>;
}
