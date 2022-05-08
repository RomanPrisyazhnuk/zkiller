import React, { ReactElement, useEffect } from 'react';
import { MainLogoWrap } from './styledComponents';
// import map from 'lodash/map';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, Sidebar } from '../../commonStyles/styledApp';
import { CategoryType } from '../../models/Category';

type TProps = {
  categories: CategoryType[];
  getCategories: () => void;
};

const MainPage = (props: TProps): ReactElement => {
  const { getCategories } = props;

  useEffect(() => {
    getCategories();
  }, []);

  // const category = useMemo<CategoryType[] | false>(
  //   () => !isEmpty(categories) && map(categories, (item: CategoryType) => item),
  //   [categories]
  // );
  // let leftSidebarCategories = useMemo<CategoryType[] | false>(
  //   () => !isEmpty(category) && category && category.slice(0, Math.ceil(category.length / 2)),
  //   [category]
  // );
  // let rightSidebarCategories = useMemo<CategoryType[] | false>(
  //   () => !isEmpty(category) && category && category.slice(Math.ceil(category.length / 2)),
  //   [category]
  // );

  return <>
      <NextSeo
        title={seoPages.articlesPage.title}
        description={seoPages.articlesPage.description}
        canonical={`${seoPages.baseUrl}`}
        openGraph={{
          url: `${seoPages.baseUrl}`,
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
          {/*<TitleText>Психология отношений</TitleText>*/}
          {/*{map(leftSidebarCategories, (item: CategoryType) => (*/}
          {/*  <MainCard category={item} key={item.seoId} />*/}
          {/*))}*/}
        </Sidebar>
        <ContentBlock>
          <MainLogoWrap>
            {/*<MainLogo src="/static/mainLogo.png" />*/}
          </MainLogoWrap>
        </ContentBlock>
        <Sidebar>
          {/*<TitleText>Советы опытных психологов</TitleText>*/}
          {/*{map(rightSidebarCategories, (item: CategoryType) =>*/}
          {/*  item !== null ? <MainCard category={item} key={item.seoId} /> : <></>*/}
          {/*)}*/}
        </Sidebar>
      </ContentWrapper>
    </>;
};

export default MainPage;
