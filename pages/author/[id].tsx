import * as React from 'react';
import { useRouter } from 'next/router';
import LoaderSemantic from '../../components/Loader/Loader';
import AuthorPageComponent from '../../components/AuthorPage';

const AuthorPage: React.FC = () => {
  const router = useRouter();
  return Boolean(router.query.id) ? (
    <AuthorPageComponent seoId={`${router.query.id}`} />
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorPage;
