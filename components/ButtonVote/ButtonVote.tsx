import React from 'react';
import { ButtonCount } from './styledComponents';
import VoteIcon from './VoteIcon';

interface IProps {
  isLike?: boolean;
  isClicked?: boolean;
  count: number;
}

const ButtonVote: React.FC<IProps> = ({ isLike, isClicked, count }) => (
  <div>
    <VoteIcon isLike={isLike} isClicked={isClicked} />
    <ButtonCount isLike={isLike}>{count}</ButtonCount>
  </div>
);

export default ButtonVote;
