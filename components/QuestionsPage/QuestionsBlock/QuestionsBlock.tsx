import React, { ReactElement, useEffect, useMemo } from 'react';
import { QuestionsBlockWrapper, QuestionsGrid } from './styledComponents';
import QuestionCard from './QuestionCard/QuestionCard';
import { QuestionType } from '../../../models/Question';
import map from 'lodash/map';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../../constants/seoConstants';
import filter from 'lodash/filter';

type TProps = {
  getQuestions: () => void;
  questions: QuestionType[];
  gender: string;
};

const QuestionsBlock = ({ getQuestions, questions, gender }: TProps): ReactElement => {
  useEffect(() => {
    getQuestions();
  }, []);


  const questionsByGender: QuestionType[] = useMemo<QuestionType[]>(
    () => filter(questions, (question: QuestionType) => question.sex === gender),
    [questions, gender]
  );

  return (
    <QuestionsBlockWrapper>
      <NextSeo
        title={seoPages.questionsPage.title}
        description={seoPages.questionsPage.description}
        canonical={seoPages.baseUrl}
        openGraph={{
          url: seoPages.baseUrl,
          title: seoPages.questionsPage.title,
          description: seoPages.questionsPage.description,
          site_name: seoPages.siteName,
          images: [
            {
              url: seoPages.questionsPage.imageUrl,
              width: 800,
              height: 600,
              alt: seoPages.questionsPage.title,
            },
          ],
        }}
      />
      <QuestionsGrid stackable>
        {map(
          questionsByGender,
          (item: QuestionType): ReactElement => (
            <QuestionCard key={item.id} question={item} />
          )
        )}
      </QuestionsGrid>
    </QuestionsBlockWrapper>
  );
};

export default QuestionsBlock;
