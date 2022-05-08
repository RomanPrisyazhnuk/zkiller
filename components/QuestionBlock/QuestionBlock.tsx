import React, { ReactElement, useEffect, useMemo } from 'react';
import { QuestionBlockContainer, AnswerGrid, QuestionContentBlock } from './styledComponents';
import Answer from './Answer/Answer';
import Question from './Question/Question';
import { QuestionType } from '../../models/Question';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import { gender as genderConst } from '../../constants/enums';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import LoaderSemantic from '../Loader/Loader';
import isEmpty from 'lodash/isEmpty';

type TProps = {
  id: string;
  questions: { [id: string]: QuestionType };
  getQuestion: (id: string) => void;
  gender: string;
};

const QuestionBlock = (props: TProps): ReactElement => {
  const { getQuestion, id, questions, gender } = props;
  const isGirl = useMemo<boolean>(() => gender === genderConst.female, [gender]);

  useEffect(() => {
    if (isEmpty(questions[id])) {
      getQuestion(id);
    }
  }, []);

  const question = useMemo<QuestionType | false>(() => !isEmpty(questions) && questions[id], [questions, id]);

  return question ? (
    question && (
      <>
        <NextSeo
          title={question.titleText}
          description={question.descriptionText}
          canonical={`${seoPages.baseUrl}/question/${question.id}`}
          openGraph={{
            url: `${seoPages.baseUrl}/question/${question.id}`,
            title: question.titleText,
            description: question.descriptionText,
            site_name: seoPages.siteName,
            images: [
              {
                url: question.imageSrc,
                width: 800,
                height: 600,
                alt: question.titleText,
              },
            ],
          }}
        />
        <Header/>
        <QuestionBlockContainer>
          <ContentWrapper>
            <Sidebar>
              <SidebarSelf data={[]} />
            </Sidebar>
            <ContentBlock>
              <QuestionContentBlock>
                <Question text={question.titleText} />
                <AnswerGrid>
                  {question.answers.map((item) => (
                    <Answer key={item.titleText} answer={item} />
                  ))}
                </AnswerGrid>
              </QuestionContentBlock>
            </ContentBlock>
            <Sidebar>
              <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />
            </Sidebar>
          </ContentWrapper>
        </QuestionBlockContainer>
      </>
    )
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default QuestionBlock;
