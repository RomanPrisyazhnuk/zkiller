import React, { ReactElement, useEffect, useMemo } from 'react';
import { ArticleType } from '../../../models/Article';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import ArticleCard from '../../ArticlesPage/ArticlesBlock/ArticleCard/ArticleCard';
import { UserType } from '../../../models/User';
import LoaderSemantic from '../../Loader/Loader';
import AuthorsCard from './AuthorsCard/AuthorsCard';
import { BlockWrapper, ArticlesGrid } from '../../../commonStyles/styledApp';

type TProps = {
  getArticlesByUserId: (id: string, seoId: string) => void;
  articles: { [key: string]: ArticleType };
  author: UserType;
  gender: string;
};

const authorsWithoutArticle: string[] = [
  'andrey-lorgus',
  'dzhon-gottman',
  'maksim-gorkiy',
  'duglas-abrams',
  'dzhuli-shvarc-gottman',
  'rechel-karlton-adams',
]; // TODO: remove when all authors will have articles

const AuthorBlock = (props: TProps): ReactElement => {
  const { getArticlesByUserId, articles, author } = props;

  useEffect(() => {
    if (author.id && isEmpty(author.articlesIds) && !authorsWithoutArticle.includes(author.seoId)) {
      getArticlesByUserId(author.id, author.seoId);
    }
  }, [author]);

  const articlesByAuthor = useMemo<ArticleType[] | false>(
    () => !isEmpty(articles) && map(author.articlesIds, (item: string) => articles[item]),
    [articles, author]
  );

  return !isEmpty(author) && articlesByAuthor ? (
    <BlockWrapper>
      <AuthorsCard author={author} />
      <ArticlesGrid stackable>
        {map(articlesByAuthor, (item: ArticleType) => item && <ArticleCard key={item.seoId} article={item} />)}
      </ArticlesGrid>
    </BlockWrapper>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorBlock;
