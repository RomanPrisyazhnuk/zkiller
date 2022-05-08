import styled from 'styled-components';
import { background, borderRadius, color, fontSize, padding, width } from '../../../constants/styledConstants';

export const AnswerContainer = styled.div`
  width: ${width.large};
  border: 2px solid white;
  position: relative;
  border-radius: ${borderRadius.small};

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 1px;
    top: 100%;
    left: 5%;
    background: ${color.grey};
  }

  &:last-child::before {
    height: 0;
  }
`;

export const AnswerTitle = styled.h2`
  width: ${width.large};
  font-size: ${fontSize.medium};
  color: ${color.dimgray};
  padding: ${padding.small} 0 0;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const AnswerText = styled.div`
  width: ${width.large};
  font-size: ${fontSize.xsmall};
  color: ${color.dimgray};
  padding: ${padding.small} 0 ${padding.small};
  line-height: 1.3;
`;

export const AnswerTextWrap = styled.div`
  color: inherit;
  background: ${background};
  border-radius: ${borderRadius.small};
`;

export const AnswerProgressWrap = styled.div`
  display: flex;
  justify-content: space-between;

  .progress-bar {
    width: 90%;
  }
`;
