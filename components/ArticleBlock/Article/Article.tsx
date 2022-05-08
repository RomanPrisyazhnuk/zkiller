import React, { ReactElement, useEffect, useMemo } from 'react';
import {
  ArticleContainer,
  ArticleText,
  ArticleTextWrap,
  ArticleImage,
  ArticleDescriptionText,
  ArticleContentContainer,
  ArticleAuthorLink,
} from './styledComponents';
import { ArticleType } from '../../../models/Article';
import { UserType } from '../../../models/User';
import LoaderSemantic from '../../Loader/Loader';
import Link from 'next/link';
import isEmpty from 'lodash/isEmpty';

type TProps = {
  article: ArticleType;
  authors: { [key: string]: UserType };
  getAuthorById: (id: string, articleSeoId: string) => void;
};

export const Article = (props: TProps): ReactElement => {
  const { article, authors, getAuthorById } = props;

  useEffect(() => {
    if (article.userId && isEmpty(article.userSeoId)) {
      getAuthorById(article.userId, article.seoId);
    }
  }, [article]);

  const author = useMemo<UserType | false>(() => !isEmpty(authors) && !isEmpty(article) && authors[article.userSeoId], [
    authors,
    article,
  ]);

  console.log(author);

  const createMarkup = useMemo(() => () => {
    return { __html: article.descriptionHtml };
  }, [article]);

  return author ? (
    <ArticleContainer>
      <ArticleImage src={article.imgSrc} alt={article.title} />
      <ArticleContentContainer>
        <ArticleTextWrap>
          <ArticleText>{article.title}</ArticleText>
        </ArticleTextWrap>
        <ArticleDescriptionText dangerouslySetInnerHTML={createMarkup()} />
        <ArticleAuthorLink>
          <Link href={`/author/${author.seoId}`}>
            <a>{author.name}</a>
          </Link>
        </ArticleAuthorLink>
      </ArticleContentContainer>
    </ArticleContainer>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};
