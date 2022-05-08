import React, { ReactElement, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import { gender as genderConst } from '../../constants/enums';
import { UserType } from '../../models/User';
import AuthorsBlock from './AuthorsBlock/AuthorsBlock';

type TProps = {
  getAuthors: any;
  authors: UserType[];
  gender: string;
};

const AuthorsPage = (props: TProps): ReactElement => {
  const { getAuthors, authors, gender } = props;
  const isGirl = useMemo(() => gender === genderConst.female, [gender]);

  return (
    <>
      <NextSeo
        title={seoPages.authorPage.title}
        description={seoPages.authorPage.description}
        canonical={`${seoPages.baseUrl}/authors`}
        openGraph={{
          url: `${seoPages.baseUrl}/authors`,
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
          <AuthorsBlock authors={authors} getAuthors={getAuthors} />
        </ContentBlock>
        <Sidebar>
          <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />
        </Sidebar>
      </ContentWrapper>
    </>
  );
};

export default AuthorsPage;
