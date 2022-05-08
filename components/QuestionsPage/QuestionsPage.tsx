import React, { ReactElement, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import { gender as genderConst } from '../../constants/enums';
import QuestionsBlock from './QuestionsBlock/QuestionsBlock';
import { QuestionType } from '../../models/Question';

type TProps = {
  getQuestions: () => void;
  questions: QuestionType[];
  gender: string;
};

const QuestionsPage = (props: TProps): ReactElement => {
  const { questions, getQuestions, gender } = props;
  const isGirl = useMemo<boolean>(() => gender === genderConst.female, [gender]);

  return (
    <>
      <NextSeo
        title={seoPages.articlesPage.title}
        description={seoPages.articlesPage.description}
        canonical={`${seoPages.baseUrl}/articles`}
        openGraph={{
          url: `${seoPages.baseUrl}/articles`,
          title: seoPages.articlesPage.title,
          description: seoPages.articlesPage.description,
          site_name: seoPages.siteName,
          images: [
            {
              url: seoPages.articlesPage.imageUrl,
              width: 800,
              height: 600,
              alt: seoPages.articlesPage.title,
            },
          ],
        }}
      />
      <Header/>
      <ContentWrapper>
        <Sidebar>
          <SidebarSelf data={[]} />
        </Sidebar>
        <ContentBlock>
          <QuestionsBlock gender={gender} questions={questions} getQuestions={getQuestions} />
        </ContentBlock>
        <Sidebar>
          <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />
        </Sidebar>
      </ContentWrapper>
    </>
  );
};

export default QuestionsPage;
