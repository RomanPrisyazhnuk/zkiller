import * as React from 'react';
import QuestionBlock from '../../components/QuestionBlock';
import { useRouter } from 'next/router';
import LoaderSemantic from '../../components/Loader/Loader';

const QuestionPage: React.FC = () => {
  const router = useRouter();
  return Boolean(router.query.id) ? <QuestionBlock id={`${router.query.id}`} /> : <LoaderSemantic marginNeed={true} />;
};

export default QuestionPage;
