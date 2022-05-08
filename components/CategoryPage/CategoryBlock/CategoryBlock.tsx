import React, { ReactElement, useEffect, useMemo } from 'react';
import { ArticleType } from '../../../models/Article';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import ArticleCard from '../../ArticlesPage/ArticlesBlock/ArticleCard/ArticleCard';
import LoaderSemantic from '../../Loader/Loader';
import { QuestionType } from '../../../models/Question';
import CategoryCard from './CategoryCard/CategoryCard';
import { BlockWrapper, ArticlesGrid } from '../../../commonStyles/styledApp';
import { CategoryType } from '../../../models/Category';

type TProps = {
  getArticlesByCategory: (id: string, seoId: string) => void;
  getQuestions: any;
  articles: { [key: string]: ArticleType };
  questions: QuestionType[];
  category: CategoryType;
  gender: string;
};

const categoriesWithoutArticles: string[] = ['rodologiy']; // TODO: remove when all categories will have articles

const CategoryBlock = (props: TProps): ReactElement => {
  const { getArticlesByCategory, getQuestions, articles, questions, category } = props;

  useEffect(() => {
    getQuestions();
    if (category.id && isEmpty(category.articlesIds) && !categoriesWithoutArticles.includes(category.seoId)) {
      getArticlesByCategory(category.id, category.seoId);
    }
  }, []);

  const articlesByCategory = useMemo<ArticleType[] | false>(
    () => !isEmpty(articles) && map(category.articlesIds, (item: string) => articles[item]),
    [articles, category]
  );

  return questions && category && articlesByCategory ? (
    <BlockWrapper>
      <CategoryCard category={category} />
      <ArticlesGrid stackable>
        {map(articlesByCategory, (item: ArticleType) => item && <ArticleCard key={item.seoId} article={item} />)}
      </ArticlesGrid>
    </BlockWrapper>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default CategoryBlock;
