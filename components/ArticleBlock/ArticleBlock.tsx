import React, { ReactElement, useEffect, useMemo } from 'react';
import { ArticleBlockContainer, ArticleContentBlock } from './styledComponents';
import LoaderSemantic from '../Loader/Loader';
import { Article } from './Article/Article';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import Header from '../Header/Header';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import { gender as genderConst } from '../../constants/enums';
import { ArticleType } from '../../models/Article';
import { UserType } from '../../models/User';
import isEmpty from 'lodash/isEmpty';

type TProps = {
  seoId: string;
  articles: { [key: string]: ArticleType };
  authors: { [key: string]: UserType };
  getArticle: (id: string) => void;
  getAuthorById: (id: string, articleSeoId: string) => void;
  gender: string;
};

const ArticleBlock = (props: TProps): ReactElement => {
  const { getArticle, getAuthorById, seoId, articles, authors, gender } = props;
  const isGirl = useMemo<boolean>(() => gender === genderConst.female, [gender]);

  useEffect(() => {
    if (isEmpty(articles[seoId])) {
      getArticle(seoId);
    }
  }, []);

  const article = useMemo<ArticleType | false>(() => !isEmpty(articles) && articles[seoId], [articles, seoId]);

  return article && authors ? (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={`${seoPages.baseUrl}/article/${seoId}`}
        openGraph={{
          url: `${seoPages.baseUrl}/article/${seoId}`,
          title: article.title,
          description: article.description,
          site_name: seoPages.siteName,
          images: [
            {
              url: article.imgSrc,
              width: 800,
              height: 600,
              alt: article.title,
            },
          ],
        }}
      />
      <Header/>
      <ArticleBlockContainer>
        <ContentWrapper>
          <Sidebar>
            <SidebarSelf data={[]} />
          </Sidebar>
          <ContentBlock>
            <ArticleContentBlock>
              <Article article={article} authors={authors} getAuthorById={getAuthorById} />
            </ArticleContentBlock>
          </ContentBlock>
          <Sidebar>
            <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />
          </Sidebar>
        </ContentWrapper>
      </ArticleBlockContainer>
    </>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default ArticleBlock;
