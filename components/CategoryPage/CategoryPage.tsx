import React, { ReactElement, useEffect, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import { seoPages } from '../../constants/seoConstants';
import Header from '../Header/Header';
import { ContentBlock, ContentWrapper, GenderImage, Sidebar } from '../../commonStyles/styledApp';
import SidebarSelf from '../SidebarSelf/SidebarSelf';
import { gender as genderConst } from '../../constants/enums';
import CategoryBlock from './CategoryBlock';
import { CategoryType } from '../../models/Category';
import LoaderSemantic from '../Loader/Loader';
import isEmpty from 'lodash/isEmpty';

type TProps = {
  seoId: string;
  gender: string;
  categories: {[key: string]: CategoryType};
  getCategoryBySeoId: (id: string) => void;
};

const CategoryPage = (props: TProps): ReactElement => {
  const { gender, seoId, categories, getCategoryBySeoId } = props;
  const isGirl = useMemo<boolean>(() => gender === genderConst.female, [gender]);

  useEffect(() => {
    if (isEmpty(categories[seoId])) {
      getCategoryBySeoId(seoId);
    }
  }, [seoId]);

  const category = useMemo<CategoryType | false>(() => !isEmpty(categories) && categories[seoId], [categories, seoId]);

  return category ? (
    <>
      <NextSeo
        title={seoPages.authorPage.title}
        description={seoPages.authorPage.description}
        canonical={`${seoPages.baseUrl}/category/${seoId}`}
        openGraph={{
          url: `${seoPages.baseUrl}/category/${seoId}`,
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
          <CategoryBlock gender={gender} category={category} />
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

export default CategoryPage;
