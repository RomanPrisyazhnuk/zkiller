import React, { ReactElement } from 'react';
import { CardText, CardContainer } from './styledComponents';
import Link from 'next/link';
import { CategoryType } from '../../../models/Category';

type TProps = {
  category: CategoryType;
};

const MainCard = (props: TProps): ReactElement => {
  const { category } = props;
  return (
    <CardContainer>
      <Link
        href={{
          pathname: `/category/${category.seoId}`,
        }}
      >
        <a title={`Перейти в категорию: ${category.title}`}>
          <CardText>{category.title}</CardText>
        </a>
      </Link>
    </CardContainer>
  );
};

export default MainCard;
