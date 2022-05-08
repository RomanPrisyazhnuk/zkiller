import { ReactElement } from 'react';
import LoaderSemantic from '../../../Loader/Loader';
import {
  TitleText,
  TextWrap,
  ContentBlockContainer,
  DescriptionText,
  CardBlockContainer,
} from '../../../../commonStyles/styledApp';
import { CategoryType } from '../../../../models/Category';

type TProps = {
  category: CategoryType;
};

const CategoryCard = (props: TProps): ReactElement => {
  const { category } = props;

  return category ? (
    <CardBlockContainer>
      <TextWrap>
        <TitleText>{category.title}</TitleText>
      </TextWrap>
      <ContentBlockContainer>
        <DescriptionText>{category.description}</DescriptionText>
      </ContentBlockContainer>
    </CardBlockContainer>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default CategoryCard;
