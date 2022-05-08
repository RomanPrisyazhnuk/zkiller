import styled from 'styled-components';
import { borderRadius, color, padding, width } from '../../../constants/styledConstants';

export const QuestionContainer = styled.div`
  width: ${width.large};
  border: 2px solid ${color.white};
  position: relative;
  background: ${color.goldenrod};
  border-radius: ${borderRadius};
`;

export const QuestionText = styled.h1`
  font-size: 35px;
  color: ${color.dimgray};
  padding: ${padding.small};
`;

export const QuestionTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
