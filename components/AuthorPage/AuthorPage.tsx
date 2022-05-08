import React, { ReactElement, useEffect, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import { gender as genderConst } from '../../constants/enums';
import { UserType } from '../../models/User';
import AuthorBlock from './AuthorBlock/AuthorBlock';
import { ArticleType } from '../../models/Article';
import LoaderSemantic from '../Loader/Loader';
import isEmpty from 'lodash/isEmpty';

type TProps = {
  seoId: string;
  getAuthor: (seoId: string) => void;
  getArticlesByUserId: (id: string, seoId: string) => void;
  articles: { [key: string]: ArticleType };
  authors: { [key: string]: UserType };
  gender: string;
};

const AuthorPage = (props: TProps): ReactElement => {
  const { getAuthor, getArticlesByUserId, articles, authors, gender, seoId } = props;
  const isGirl = useMemo<boolean>(() => gender === genderConst.female, [gender]);

  useEffect(() => {
    if (seoId) {
      if (isEmpty(authors[seoId])) {
        getAuthor(seoId);
      }
    }
  }, [seoId]);

  const author = useMemo<UserType | false>(() => !isEmpty(authors) && authors[seoId], [authors, seoId]);

  return author ? (
    <>
      <NextSeo
        title={seoPages.authorPage.title}
        description={seoPages.authorPage.description}
        canonical={`${seoPages.baseUrl}/author/${seoId}`}
        openGraph={{
          url: `${seoPages.baseUrl}/author/${seoId}`,
          title: seoPages.authorPage.title,
          description: seoPages.authorPage.description,
          site_name: seoPages.siteName,
          images: [
            {
              url: seoPages.authorPage.imageUrl,
              width: 800,
              height: 600,
              alt: seoPages.authorPage.title,
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
          <AuthorBlock gender={gender} getArticlesByUserId={getArticlesByUserId} articles={articles} author={author} />
        </ContentBlock>
        <Sidebar>
          <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />
        </Sidebar>
      </ContentWrapper>
    </>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorPage;
