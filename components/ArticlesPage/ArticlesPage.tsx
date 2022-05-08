import React, { ReactElement, useMemo } from 'react';
import { ArticleType } from '../../models/Article';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import ArticlesBlock from './ArticlesBlock/ArticlesBlock';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import { gender as genderConst } from '../../constants/enums';

type TProps = {
  getArticles: () => void;
  articles: ArticleType[];
  gender: string;
};

const ArticlesPage = (props: TProps): ReactElement => {
  const { articles, getArticles, gender } = props;
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
          <ArticlesBlock gender={gender} articles={articles} getArticles={getArticles} />
        </ContentBlock>
        <Sidebar>
          <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />
        </Sidebar>
      </ContentWrapper>
    </>
  );
};

export default ArticlesPage;
