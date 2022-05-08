import * as React from 'react';
import { useRouter } from 'next/router';
import LoaderSemantic from '../../components/Loader/Loader';
import ArticleBlock from '../../components/ArticleBlock';

const ArticlePage: React.FC = () => {
  const router = useRouter();
  return Boolean(router.query.id) ? (
    <ArticleBlock seoId={`${router.query.id}`} />
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default ArticlePage;
