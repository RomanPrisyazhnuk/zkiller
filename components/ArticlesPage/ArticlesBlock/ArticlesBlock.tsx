import React, { ReactElement, useEffect, useMemo } from 'react';
import { ArticlesBlockWrapper, ArticlesGrid } from './styledComponents';
import { ArticleType } from '../../../models/Article';
import map from 'lodash/map';
import ArticleCard from './ArticleCard/ArticleCard';
import filter from 'lodash/filter';

type TProps = {
  getArticles: () => void;
  articles: ArticleType[];
  gender: string;
};

const ArticlesBlock = (props: TProps): ReactElement => {
  const { getArticles, articles, gender } = props;

  const articlesByGender: ArticleType[] = useMemo<ArticleType[]>(
    (): ArticleType[] =>
      filter(articles, (article: ArticleType) => article.gender === gender || article.gender === 'female both male'),
    [articles, gender]
  );
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticlesBlockWrapper>
      <ArticlesGrid stackable>
        {map(articlesByGender, (item: ArticleType) => (
          <ArticleCard key={item.seoId} article={item} />
        ))}
      </ArticlesGrid>
    </ArticlesBlockWrapper>
  );
};

export default ArticlesBlock;
