import ProfileLayout from '@/components/layouts/ProfileLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const Search: NextPageWithLayout = () => {
  return (
    <div>
      this is the button of search
      <section>
        <h2>Recientes</h2>
        <h4>Las personas últimamente están hablando de esto</h4>
        <div>🎠</div>
      </section>
    </div>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Search;
