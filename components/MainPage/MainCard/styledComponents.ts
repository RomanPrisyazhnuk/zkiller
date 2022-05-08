import styled from 'styled-components';
import { borderRadius, color, fontSize, margin, padding, width } from '../../../constants/styledConstants';

export const CardContainer = styled.div`
  width: ${width.large};
  background-color: ${color.lightGrey};
  position: relative;
  border-radius: ${borderRadius.small};
  cursor: pointer;
  margin-bottom: ${margin.large};
  box-shadow: 10px 5px 5px ${color.grey};
`;

export const CardText = styled.h2`
  width: ${width.large};
  font-size: ${fontSize.medium};
  color: ${color.darkGrey};
  padding: ${padding.small};
`;
