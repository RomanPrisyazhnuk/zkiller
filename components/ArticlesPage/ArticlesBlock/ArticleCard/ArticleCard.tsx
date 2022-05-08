import React, { ReactElement } from 'react';
import Link from 'next/link';
import { ArticleType } from '../../../../models/Article';
import { CardImage, CardContainer, LinkWrap } from '../../../../commonStyles/styledApp';

type TProps = {
  article: ArticleType;
};

const ArticleCard = (props: TProps): ReactElement => {
  const { article } = props;
  return (
    <CardContainer>
      <LinkWrap>
        <Link
          href={{
            pathname: `/article/${article.seoId}`,
          }}
        >
          <a>
            <CardImage src={article.imgSrc} alt={article.title} />
          </a>
        </Link>
      </LinkWrap>
    </CardContainer>
  );
};

export default ArticleCard;
