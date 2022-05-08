import React, { useMemo } from 'react';
import { AnswerContainer, AnswerText, AnswerTextWrap, AnswerTitle, AnswerProgressWrap } from './styledComponents';
import ButtonVote from '../../ButtonVote/ButtonVote';
import { AnswerType } from '../../../models/Answer';
import { Progress } from 'semantic-ui-react';

type TProps = {
  answer: AnswerType;
};

const Answer: React.FC<TProps> = ({ answer }) => {
  const percent = useMemo<number>(
    () => Math.floor((answer.countUsefull / (answer.countUsefull + answer.countUseless)) * 100),
    [answer.countUsefull, answer.countUseless]
  );

  return (
    <AnswerContainer>
      <AnswerTitle>{answer.titleText}</AnswerTitle>
      <AnswerTextWrap>
        <AnswerText>{answer.descriptionText}</AnswerText>
      </AnswerTextWrap>
      <AnswerProgressWrap>
        <ButtonVote count={answer.countUseless} />
        <Progress
          percent={percent}
          progress
          color={percent > 50 ? 'green' : 'red'}
          label="Успешность ответа"
          className="progress-bar"
          size="small"
        />
        <ButtonVote isLike count={answer.countUsefull} />
      </AnswerProgressWrap>
    </AnswerContainer>
  );
};

export default Answer;
