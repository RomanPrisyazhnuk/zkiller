import * as React from 'react';
import { QuestionContainer, QuestionText, QuestionTextWrap } from './styledComponents';

const Question: React.FC<any> = ({ text }): any => {
  return (
    <QuestionContainer>
      <QuestionTextWrap>
        <QuestionText>{text}</QuestionText>
      </QuestionTextWrap>
    </QuestionContainer>
  );
};

export default Question;
