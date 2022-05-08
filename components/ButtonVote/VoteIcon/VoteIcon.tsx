import React, { useMemo } from 'react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { TPropsFromDispatch } from '.';
import { color as colors } from '../../../constants/styledConstants';

type TPassedProps = {
  isLike?: boolean;
  isClicked?: boolean;
};

type TProps = TPropsFromDispatch & TPassedProps;

const defaultProps = {
  isLike: false,
  isClicked: false,
};

const VoteIcon: React.FC<TProps> = ({ isLike, isClicked, updateAnswersCounts }) => {
  const color = useMemo<string>(() => (isLike ? colors.green : colors.red), [isLike]);
  const title = useMemo<string>(() => (isLike ? 'Помогло' : 'Не помогло'), [isLike]);
  const iconProps = {
    color,
    title,
    size: 26,
    cursor: 'pointer',
    onClick: () => {
      updateAnswersCounts('6-yavnyh-priznakov-kak-vyyavit-izmenshchicu/answers/0');
    },
  };

  switch (true) {
    // like icons
    case isLike && isClicked:
      return <AiFillLike {...iconProps} />;
    case isLike && !isClicked:
      return <AiOutlineLike {...iconProps} />;
    // dislike icons
    case !isLike && isClicked:
      return <AiFillDislike {...iconProps} />;
    case !isLike && !isClicked:
      return <AiOutlineDislike {...iconProps} />;
    // default
    default:
      return null;
  }
};

VoteIcon.defaultProps = defaultProps;

export default VoteIcon;
