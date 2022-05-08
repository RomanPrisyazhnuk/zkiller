import React, { ReactElement } from 'react';
import { CardImage, CardContainer, LinkWrap } from '../../../../commonStyles/styledApp';
import { QuestionType } from '../../../../models/Question';
import Link from 'next/link';

type TProps = {
  question: QuestionType;
};

const QuestionCard = (props: TProps): ReactElement => {
  const { question } = props;
  return (
    <CardContainer>
      <LinkWrap>
        <Link
          href={{
            pathname: `/question/${question.id}`,
          }}
        >
          <a title={question.titleText}>
            <CardImage src={question.imageSrc} alt={question.titleText} />
          </a>
        </Link>
      </LinkWrap>
    </CardContainer>
  );
};

export default QuestionCard;
